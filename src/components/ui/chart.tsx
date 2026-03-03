import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    icon?: React.ComponentType<{ className?: string }>;
    color?: string;
    theme?: Partial<Record<keyof typeof THEMES, string>>;
  }
>;

type ChartContainerProps = React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"];
};

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ id, className, children, config, ...props }, ref) => {
    const uniqueId = React.useId().replace(/:/g, "");
    const chartId = `chart-${id ?? uniqueId}`;

    return (
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    );
  },
);
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, itemConfig]) => itemConfig.theme || itemConfig.color,
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(([theme, prefix]) => {
            const declarations = colorConfig
              .map(([key, itemConfig]) => {
                const color =
                  itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ??
                  itemConfig.color;

                return color ? `--color-${key}: ${color};` : null;
              })
              .filter(Boolean)
              .join("");

            return `${prefix} [data-chart=${id}] {${declarations}}`;
          })
          .join(""),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

type TooltipPayloadItem = {
  color?: string;
  dataKey?: string;
  name?: string;
  value?: number | string;
};

type ChartTooltipContentProps = React.HTMLAttributes<HTMLDivElement> & {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: React.ReactNode;
  hideLabel?: boolean;
};

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  ChartTooltipContentProps
>(({ active, payload, label, className, hideLabel = false, ...props }, ref) => {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "grid min-w-[8rem] gap-1 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
        className,
      )}
      {...props}
    >
      {!hideLabel && label ? (
        <p className="font-medium text-foreground">{label}</p>
      ) : null}

      {payload.map((item) => (
        <div key={`${item.dataKey ?? item.name}`} className="flex items-center gap-2">
          <span
            className="inline-flex h-2 w-2 rounded-[2px]"
            style={{ backgroundColor: item.color ?? "currentColor" }}
          />
          <span className="text-muted-foreground">{item.name}</span>
          <span className="ml-auto font-mono font-medium text-foreground">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
});
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

type LegendPayloadItem = {
  color?: string;
  dataKey?: string;
  value?: React.ReactNode;
};

type ChartLegendContentProps = React.HTMLAttributes<HTMLDivElement> & {
  payload?: LegendPayloadItem[];
  hideIcon?: boolean;
  verticalAlign?: "top" | "bottom" | "middle";
};

const ChartLegendContent = React.forwardRef<HTMLDivElement, ChartLegendContentProps>(
  (
    { className, payload, hideIcon = false, verticalAlign = "bottom", ...props },
    ref,
  ) => {
    if (!payload?.length) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className,
        )}
        {...props}
      >
        {payload.map((item) => (
          <div key={`${item.dataKey ?? item.value}`} className="flex items-center gap-1.5">
            {hideIcon ? null : (
              <span
                className="inline-flex h-2 w-2 rounded-[2px]"
                style={{ backgroundColor: item.color ?? "currentColor" }}
              />
            )}
            <span className="text-xs text-muted-foreground">{item.value}</span>
          </div>
        ))}
      </div>
    );
  },
);
ChartLegendContent.displayName = "ChartLegend";

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};

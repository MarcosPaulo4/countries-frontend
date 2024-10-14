import * as am5 from "@amcharts/amcharts5";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";
import * as am5xy from "@amcharts/amcharts5/xy";
import { useLayoutEffect, useRef } from "react";
import { PopulationDataPointType } from "../countryInfo.interface";


interface PopulationChartProps{
  data?: PopulationDataPointType[]
}
export const PopulationChart = ({ data=[] }:PopulationChartProps) => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    if (!data) {
  return
    }
    
    const root = am5.Root.new(chartRef.current);
    root.setThemes([am5themes_Responsive.new(root)]);

    root.numberFormatter.setAll({
      numberFormat: "####",
    numericFields: ["valueY"]
    })

   

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        layout: root.verticalLayout,
            maxTooltipDistance: 0,
      arrangeTooltips: false,
      wheelX: "panX",
      wheelY: "zoomX"
      })
    );

   const legend = chart.children.push(
    am5.Legend.new(root, {
      centerX: am5.p50,
      x: am5.p50,
      reverseChildren: true
    })
  );
    
   

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 45, 
        }),
                tooltip: am5.Tooltip.new(root, {}),

      })
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),numberFormat:'#a',
         calculateTotals: true,
      })
    );

    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Population",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "year",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{categoryX}: {valueY}",active:true
        }),
      })
    );


   chart.set("scrollbarX", am5.Scrollbar.new(root, { orientation: "horizontal" }));

    series.appear(500, 100);

    series.data.setAll(data);
legend.data.setAll(data)
    xAxis.data.setAll(data);


    return () => {
      root.dispose();
    };
  }, [data]);

  if (!data.length) {
    return ''
  }
  return  <div ref={chartRef} style={{  width: "90vw", height: "500px" }}/>
}
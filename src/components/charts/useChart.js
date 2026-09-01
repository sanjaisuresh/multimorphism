import { useStore } from '@/store'
import merge from 'lodash.merge'
import { useTheme } from '@/providers/ThemeProvider'

const PRESET_COLORS = {
  yellow: { default: '#FFDF00', lighter: '#FFF9C4' },
  cyan: { default: '#078DEE', lighter: '#CCF4FE' },
  purple: { default: '#A855F7', lighter: '#F3E8FF' },
  green: { default: '#22C55E', lighter: '#DCFCE7' },
  blue: { default: '#1890FF', lighter: '#D1E9FF' },
  orange: { default: '#FA541C', lighter: '#FFE8D6' },
  red: { default: '#F5222D', lighter: '#FFE3E3' }
}

export function useChart(options = {}) {
  const { themeStore } = useStore()
  const { themeMode, themeColorPresets, fontFamily } = themeStore
  const { themeName } = useTheme()

  const isDark = themeMode === 'dark'
  const isBrutal = themeName === 'neobrutalism'
  const isGlass = themeName === 'glassmorphism'
  const isNeu = themeName === 'neumorphism'
  const isRetro = themeName === 'retro'
  const isBauhaus = themeName === 'bauhaus'
  const isBento = themeName === 'bento'
  const isMaterial = themeName === 'material'
  const isAurora = themeName === 'aurora'
  const isFrutiger = themeName === 'frutigeraero'
  const isSkeuo = themeName === 'skeuomorphism'
  const isWireframe = themeName === 'wireframe'
  const isMonochrome = themeName === 'monochrome'
  const isMemphis = themeName === 'memphis'
  
  const isFlat = isBrutal || isBauhaus || isMonochrome || isMemphis || isWireframe
  const is3D = isNeu || isSkeuo || isFrutiger
  
  const primaryColor = PRESET_COLORS[themeColorPresets]?.default || PRESET_COLORS.cyan.default
  const primaryLighter = PRESET_COLORS[themeColorPresets]?.lighter || PRESET_COLORS.cyan.lighter

  const textColor = isBauhaus || isMonochrome || isWireframe ? (isDark ? '#ffffff' : '#000000') : (isBrutal || isMemphis ? '#000000' : (isRetro ? primaryColor : (isGlass || isAurora ? (isDark ? '#f1f5f9' : '#334155') : (isDark ? '#cbd5e1' : '#475569'))))
  const gridColor = isBauhaus || isMonochrome || isWireframe ? (isDark ? '#333333' : '#e5e5e5') : (isBrutal || isMemphis ? '#000000' : (isRetro ? `${primaryColor}33` : (isGlass || isAurora ? 'rgba(255,255,255,0.2)' : (isNeu || isSkeuo ? (isDark ? '#27282d' : '#ffffff') : (isDark ? '#1e293b' : '#e2e8f0')))))
  const tooltipBg = isBauhaus || isMonochrome || isWireframe ? (isDark ? '#ffffff' : '#000000') : (isBrutal || isMemphis ? primaryColor : (isRetro ? '#050505' : (isGlass || isAurora ? 'rgba(255,255,255,0.4)' : (isNeu || isSkeuo ? (isDark ? '#1a1b1e' : '#e0e5ec') : (isDark ? '#1e293b' : '#ffffff')))))

  const baseOptions = {
    colors: [primaryColor, '#F59E0B', '#10B981', '#EF4444', primaryLighter],
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      parentHeightOffset: 0,
      foreColor: textColor,
      fontFamily: `"${fontFamily}", sans-serif`,
      background: 'transparent',
      dropShadow: {
        enabled: isGlass || is3D || isRetro || isAurora || isMemphis,
        top: isMemphis ? 4 : (is3D ? 4 : 0),
        left: isMemphis ? 4 : (is3D ? 4 : 0),
        blur: isMemphis ? 0 : (isRetro || isAurora ? 12 : (is3D ? 8 : 15)),
        color: isMemphis ? '#000000' : (is3D ? (isDark ? '#000000' : '#b8bcc2') : primaryColor),
        opacity: isMemphis ? 1 : (isRetro || isAurora ? 0.8 : (is3D ? (isDark ? 0.8 : 0.6) : 0.3))
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
      },
      redrawOnParentResize: true,
      redrawOnWindowResize: true,
    },
    states: {
      hover: { filter: { type: 'darken', value: 0.9 } },
      active: { filter: { type: 'darken', value: 0.9 } },
    },
    fill: {
      opacity: isWireframe ? 0 : 1,
      type: isFlat ? 'solid' : (isAurora || isFrutiger ? 'gradient' : 'gradient'),
      gradient: {
        shade: isDark ? 'dark' : 'light',
        type: "vertical",
        shadeIntensity: isFrutiger ? 0.8 : 0.5,
        opacityFrom: isAurora ? 0.5 : (isFrutiger ? 0.9 : 0.7),
        opacityTo: isAurora ? 0.1 : (isFrutiger ? 0.3 : 0.9),
        stops: [0, 100]
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: isWireframe ? 2 : (isFlat ? 4 : (isGlass || isAurora ? 2 : (isMaterial ? 6 : 3))),
      curve: isFlat || isWireframe ? 'straight' : 'smooth',
      lineCap: isFlat ? 'square' : 'round',
      dashArray: isWireframe ? 5 : 0,
      colors: isFlat ? [(isBauhaus || isMonochrome || isWireframe ? (isDark ? '#ffffff' : '#000000') : '#000000')] : undefined,
    },
    grid: {
      strokeDashArray: isFlat && !isWireframe ? 0 : 4,
      borderColor: gridColor,
      padding: { top: 10, right: 10, bottom: 0, left: 10 },
      xaxis: { lines: { show: isFlat } },
      yaxis: { lines: { show: true } },
    },
    xaxis: { 
      axisBorder: { show: isFlat, color: gridColor, height: isFlat ? 4 : 1 }, 
      axisTicks: { show: isFlat, color: gridColor },
      tooltip: { enabled: false }
    },
    markers: {
      size: isFlat || isWireframe ? 6 : 0,
      strokeColors: isBauhaus || isMonochrome || isWireframe ? (isDark ? '#ffffff' : '#000000') : (isMemphis ? '#000000' : undefined),
      strokeWidth: isFlat || isWireframe ? 2 : 0,
      shape: isFlat || isWireframe ? 'square' : 'circle',
      colors: [primaryColor, '#F59E0B', '#10B981', '#EF4444', primaryLighter],
    },
      tooltip: { 
        theme: isDark || isRetro || isMonochrome ? 'dark' : 'light',
        style: {
          fontSize: '12px',
          fontFamily: `"${fontFamily}", sans-serif`
        },
        x: { show: true } 
      },
    legend: {
      show: true,
      fontSize: '13px',
      position: 'top',
      horizontalAlign: 'right',
      markers: { radius: 12 },
      fontWeight: 500,
      itemMargin: { horizontal: 8, vertical: 8 },
      labels: { colors: textColor },
    },
    plotOptions: {
      bar: { 
        borderRadius: isFlat ? 0 : 6, 
        columnWidth: '40%', 
        borderRadiusApplication: 'end',
        colors: {
          backgroundBarColors: [],
          backgroundBarOpacity: 1,
        }
      },
      pie: {
        donut: { 
          labels: { 
            show: true, 
            value: { color: isDark ? '#f8fafc' : '#0f172a', fontSize: '24px', fontWeight: 700 }, 
            total: { show: true, label: 'Total', color: textColor, fontSize: '14px' } 
          } 
        },
      },
      radialBar: {
        hollow: { margin: -8, size: '60%' },
        track: {
          margin: -8,
          strokeWidth: '50%',
          background: isDark ? '#334155' : '#e2e8f0',
        },
        dataLabels: {
          value: { color: isDark ? '#f8fafc' : '#0f172a', fontSize: '24px', fontWeight: 700 },
          total: { show: true, label: 'Total', color: textColor, fontSize: '14px' },
        },
      },
      radar: {
        polygons: {
          fill: { colors: ['transparent'] },
          strokeColors: gridColor,
          connectorColors: gridColor,
        },
      },
    },
  }

  let tooltipCss = '';
  if (isGlass || isAurora) tooltipCss = 'backdrop-filter: blur(12px);';
  else if (isRetro) tooltipCss = `border: 1px solid ${primaryColor}; box-shadow: 0 0 10px ${primaryColor};`;
  else if (isNeu || isSkeuo) tooltipCss = isDark ? 'box-shadow: 8px 8px 16px #0d0e0f, -8px -8px 16px #27282d;' : 'box-shadow: 8px 8px 16px #b8bcc2, -8px -8px 16px #ffffff;';
  else if (isMemphis) tooltipCss = 'box-shadow: 4px 4px 0 0 #000000 !important; border: 2px solid #000000 !important;';
  else if (isWireframe) tooltipCss = `border: 2px dashed ${isDark ? '#ffffff' : '#000000'} !important;`;

  baseOptions._tooltipCss = tooltipCss;

  return merge(baseOptions, options)
}

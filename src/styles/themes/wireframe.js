export const wireframeTheme = {
  layout: {
    app: "h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff] transition-colors duration-500 font-mono tracking-tighter",
    sidebar: {
      container: "h-full flex-col bg-transparent z-20 relative transition-all duration-300 border-r-2 border-dashed border-[#000000] dark:border-[#ffffff]",
      linkActive: "bg-transparent text-[#000000] dark:text-[#ffffff] font-bold rounded-none border-2 border-dashed border-[#000000] dark:border-[#ffffff]",
      linkInactive: "text-[#666666] dark:text-[#999999] hover:text-[#000000] dark:hover:text-[#ffffff] rounded-none transition-all hover:bg-black/5 dark:hover:bg-white/5 border-2 border-transparent hover:border-dashed hover:border-[#cccccc] dark:hover:border-[#333333]"
    },
    header: "h-16 flex flex-shrink-0 items-center justify-between px-6 bg-transparent z-30 relative transition-colors duration-500 border-b-2 border-dashed border-[#000000] dark:border-[#ffffff]",
    breadcrumb: "w-full bg-transparent flex items-center px-6 py-3 z-10 text-xs font-bold text-[#000000] dark:text-[#ffffff] transition-colors duration-500 border-b-2 border-dashed border-[#000000] dark:border-[#ffffff] uppercase tracking-widest"
  },
  dashboard: {
    statIcon: "rounded-none bg-transparent text-[#000000] dark:text-[#ffffff] p-3 border-2 border-dashed border-[#000000] dark:border-[#ffffff]",
    badge: "rounded-none bg-transparent text-[#000000] dark:text-[#ffffff] px-3 py-1 text-xs font-bold border-2 border-dashed border-[#000000] dark:border-[#ffffff] uppercase",
    taskCircle: "w-4 h-4 rounded-none bg-transparent border-2 border-[#000000] dark:border-[#ffffff]",
    tabContainer: "flex bg-transparent p-1 rounded-none border-2 border-dashed border-[#000000] dark:border-[#ffffff]",
    tabActive: "bg-transparent text-[#000000] dark:text-[#ffffff] rounded-none shadow-none font-bold border-2 border-[#000000] dark:border-[#ffffff] bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.1)_25%,rgba(0,0,0,0.1)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.1)_75%,rgba(0,0,0,0.1)_100%)] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_100%)] bg-[length:10px_10px]",
    tabInactive: "text-[#666666] dark:text-[#999999] hover:text-[#000000] dark:hover:text-[#ffffff] rounded-none border-2 border-transparent",
    txIcon: "w-12 h-12 rounded-none bg-transparent flex items-center justify-center text-[#000000] dark:text-[#ffffff] border-2 border-dashed border-[#000000] dark:border-[#ffffff]",
    txRow: "border-b-2 border-dashed border-[#cccccc] dark:border-[#333333] last:border-0 hover:bg-black/5 dark:hover:bg-white/5 transition-all rounded-none px-4",
    incomeItem: "flex flex-col p-4 bg-transparent rounded-none border-2 border-dashed border-[#000000] dark:border-[#ffffff] text-[#000000] dark:text-[#ffffff] transition-all hover:bg-black/5 dark:hover:bg-white/5"
  },
  profile: {
    avatarWrapper: "bg-transparent rounded-none p-2 border-2 border-dashed border-[#000000] dark:border-[#ffffff]",
    avatarInner: "border-2 border-[#000000] dark:border-[#ffffff] rounded-none",
    editBtn: "bg-transparent text-[#000000] dark:text-[#ffffff] hover:bg-black/10 dark:hover:bg-white/10 rounded-none transition-all font-bold px-6 py-2 border-2 border-dashed border-[#000000] dark:border-[#ffffff] uppercase",
    tabsList: "mb-6 bg-transparent w-full justify-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-b-2 border-dashed border-[#000000] dark:border-[#ffffff] rounded-none",
    socialLink: "bg-transparent rounded-none text-[#000000] dark:text-[#ffffff] hover:bg-black/5 dark:hover:bg-white/5 transition-all border-2 border-dashed border-[#000000] dark:border-[#ffffff]",
    connectionCount: "bg-transparent text-[#000000] dark:text-[#ffffff] rounded-none font-bold px-3 border-2 border-[#000000] dark:border-[#ffffff]",
    connectionItem: "bg-transparent rounded-none p-4 border-2 border-dashed border-[#000000] dark:border-[#ffffff] hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300",
    projectIcon: "bg-transparent rounded-none text-[#000000] dark:text-[#ffffff] p-2 border-2 border-dashed border-[#000000] dark:border-[#ffffff]",
    progressTrack: "bg-transparent rounded-none overflow-hidden h-3 border-2 border-dashed border-[#000000] dark:border-[#ffffff]",
    avatarBorder: "border-transparent",
    newProjectCard: "border-2 border-dashed border-[#000000] dark:border-[#ffffff] bg-transparent rounded-none min-h-[280px] hover:bg-black/5 dark:hover:bg-white/5 text-[#000000] dark:text-[#ffffff] transition-all cursor-pointer flex flex-col items-center justify-center font-bold uppercase tracking-widest"
  },
  settings: {
    btnActive: "bg-transparent text-[#000000] dark:text-[#ffffff] shadow-none rounded-none font-bold border-2 border-dashed border-[#000000] dark:border-[#ffffff] bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.1)_25%,rgba(0,0,0,0.1)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.1)_75%,rgba(0,0,0,0.1)_100%)] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_100%)] bg-[length:10px_10px]",
    btnInactive: "bg-transparent text-[#666666] dark:text-[#999999] hover:text-[#000000] dark:hover:text-[#ffffff] rounded-none font-bold border-2 border-transparent hover:border-dashed hover:border-[#cccccc] dark:hover:border-[#333333]",
    colorActive: "ring-2 ring-dashed ring-[#000000] dark:ring-[#ffffff] ring-offset-2 ring-offset-[#ffffff] dark:ring-offset-[#000000] scale-110",
    colorInactive: "hover:scale-110 transition-transform opacity-50 hover:opacity-100",
    switchTrackActive: "bg-transparent border-2 border-[#000000] dark:border-[#ffffff] rounded-none",
    switchTrackInactive: "bg-transparent border-2 border-dashed border-[#000000] dark:border-[#ffffff] rounded-none",
    fontActive: "bg-transparent text-[#000000] dark:text-[#ffffff] font-bold rounded-none px-4 border-2 border-dashed border-[#000000] dark:border-[#ffffff]",
    fontInactive: "bg-transparent text-[#666666] dark:text-[#999999] font-bold hover:text-[#000000] dark:hover:text-[#ffffff] rounded-none px-4",
    sliderTrack: "bg-transparent border-2 border-dashed border-[#000000] dark:border-[#ffffff] rounded-none h-3"
  },
  avatar: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden bg-transparent border-2 border-dashed border-[#000000] dark:border-[#ffffff] rounded-none",
    image: "aspect-square h-full w-full object-cover filter grayscale contrast-200",
    fallback: "flex h-full w-full items-center justify-center bg-transparent text-[#000000] dark:text-[#ffffff] font-bold text-sm border-2 border-[#000000] dark:border-[#ffffff]"
  },
  tabs: {
    list: "inline-flex items-center justify-center bg-transparent p-1 rounded-none border-2 border-dashed border-[#000000] dark:border-[#ffffff]",
    trigger: "inline-flex items-center justify-center whitespace-nowrap px-4 py-1.5 text-sm font-bold transition-all data-[state=active]:bg-transparent data-[state=active]:text-[#000000] dark:data-[state=active]:text-[#ffffff] data-[state=active]:border-2 data-[state=active]:border-[#000000] dark:data-[state=active]:border-[#ffffff] data-[state=active]:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.1)_25%,rgba(0,0,0,0.1)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.1)_75%,rgba(0,0,0,0.1)_100%)] dark:data-[state=active]:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_100%)] data-[state=active]:bg-[length:10px_10px] rounded-none border-2 border-transparent"
  },
  typography: {
    h1: "scroll-m-20 text-4xl font-bold tracking-widest lg:text-5xl text-[#000000] dark:text-[#ffffff] uppercase",
    h2: "scroll-m-20 pb-2 text-3xl font-bold tracking-widest text-[#000000] dark:text-[#ffffff] border-b-2 border-dashed border-[#000000] dark:border-[#ffffff] uppercase",
    h3: "scroll-m-20 text-2xl font-bold tracking-widest text-[#000000] dark:text-[#ffffff] uppercase",
    p: "leading-7 text-[#333333] dark:text-[#cccccc] font-medium"
  },
  card: "bg-transparent border-2 border-dashed border-[#000000] dark:border-[#ffffff] rounded-none p-6 transition-all duration-300",
  button: {
    base: "py-2 px-4 text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 rounded-none border-2 uppercase tracking-widest",
    primary: "bg-transparent text-[#000000] dark:text-[#ffffff] border-[#000000] dark:border-[#ffffff] bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.1)_25%,rgba(0,0,0,0.1)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.1)_75%,rgba(0,0,0,0.1)_100%)] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%,rgba(255,255,255,0.1)_100%)] bg-[length:10px_10px] hover:bg-[length:5px_5px]",
    secondary: "bg-transparent text-[#000000] dark:text-[#ffffff] border-dashed border-[#000000] dark:border-[#ffffff] hover:border-solid",
    outline: "bg-transparent text-[#000000] dark:text-[#ffffff] border-dotted border-[#000000] dark:border-[#ffffff] hover:border-solid"
  },
  input: "w-full bg-transparent rounded-none border-2 border-dashed border-[#000000] dark:border-[#ffffff] outline-none focus:ring-0 focus:border-solid shadow-none text-[#000000] dark:text-[#ffffff] placeholder-gray-500 transition-all font-mono uppercase tracking-widest",
  switch: {
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-none border-2 border-dashed border-[#000000] dark:border-[#ffffff] transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent data-[state=checked]:border-solid",
    thumb: "pointer-events-none block h-5 w-5 rounded-none bg-transparent border-2 border-solid border-[#000000] dark:border-[#ffffff] shadow-none ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-[#000000] dark:data-[state=checked]:bg-[#ffffff]"
  },
  checkbox: {
    root: "peer h-6 w-6 shrink-0 rounded-none border-2 border-dashed border-[#000000] dark:border-[#ffffff] bg-transparent focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-solid data-[state=checked]:bg-[#000000] dark:data-[state=checked]:bg-[#ffffff] data-[state=checked]:text-white dark:data-[state=checked]:text-black transition-all",
    icon: "h-4 w-4 stroke-[3px]"
  },
  slider: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-3 w-full grow overflow-hidden rounded-none border-2 border-dashed border-[#000000] dark:border-[#ffffff] bg-transparent",
    range: "absolute h-full bg-[#000000] dark:bg-[#ffffff]",
    thumb: "block h-6 w-6 rounded-none border-2 border-solid border-[#000000] dark:border-[#ffffff] bg-transparent shadow-none transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#000000]/10 dark:hover:bg-[#ffffff]/10"
  },
  tooltip: "z-50 overflow-hidden rounded-none bg-white dark:bg-black px-3 py-1.5 text-sm font-mono font-bold text-[#000000] dark:text-[#ffffff] border-2 border-dashed border-[#000000] dark:border-[#ffffff] shadow-none animate-in fade-in-0 zoom-in-95 uppercase tracking-widest",
  badge: "inline-flex items-center rounded-none border-2 border-dashed border-[#000000] dark:border-[#ffffff] px-2.5 py-0.5 text-xs font-mono font-bold transition-colors focus:outline-none bg-transparent text-[#000000] dark:text-[#ffffff] uppercase tracking-widest",
  popover: "z-50 w-72 rounded-none bg-white dark:bg-black p-4 text-[#000000] dark:text-[#ffffff] border-2 border-dashed border-[#000000] dark:border-[#ffffff] shadow-none outline-none animate-in zoom-in-95",

  label: "text-sm font-bold font-mono text-[#000000] dark:text-[#ffffff] uppercase tracking-widest",
  radio: {
      root: "grid gap-2",
      item: "aspect-square h-5 w-5 rounded-none border-2 border-dashed border-[#000000] dark:border-[#ffffff] bg-transparent text-[#000000] dark:text-[#ffffff] data-[state=checked]:border-solid data-[state=checked]:bg-[#000000] dark:data-[state=checked]:bg-[#ffffff] transition-all",
    },
  otp: {
      container: "flex items-center gap-1",
      slot: "relative flex h-12 w-10 items-center justify-center text-lg font-mono border-2 border-dashed border-[#000000] dark:border-[#ffffff] bg-transparent text-[#000000] dark:text-[#ffffff] focus-visible:z-10 focus-visible:border-solid",
      slotActive: "z-10 border-solid bg-black/5 dark:bg-white/5",
      slotInactive: "bg-transparent",
    },
  toggle: {
      root: "inline-flex items-center justify-center border-2 border-dashed border-[#000000] dark:border-[#ffffff] bg-transparent font-bold font-mono uppercase text-[#000000] dark:text-[#ffffff] hover:bg-black/5 dark:hover:bg-white/5 data-[state=on]:border-solid data-[state=on]:bg-[#000000] dark:data-[state=on]:bg-[#ffffff] data-[state=on]:text-white dark:data-[state=on]:text-black transition-all px-4 py-2 rounded-none tracking-widest"
    },
  toggleGroup: {
      root: "flex items-center justify-center bg-transparent border-2 border-dashed border-[#000000] dark:border-[#ffffff] p-1 w-fit",
      item: "inline-flex items-center justify-center font-bold font-mono uppercase bg-transparent text-[#000000] dark:text-[#ffffff] transition-all data-[state=on]:bg-[#000000] dark:data-[state=on]:bg-[#ffffff] data-[state=on]:text-white dark:data-[state=on]:text-black hover:bg-black/5 dark:hover:bg-white/5 h-9 px-4 rounded-none border-2 border-transparent data-[state=on]:border-solid"
    },
}

export const monochromeTheme = {
  layout: {
    app: "h-screen w-full flex flex-col md:flex-row overflow-hidden bg-white dark:bg-black text-black dark:text-white transition-colors duration-0 font-sans",
    sidebar: {
      container: "h-full flex-col bg-white dark:bg-black z-20 relative transition-none border-r border-black dark:border-white",
      linkActive: "bg-black dark:bg-white text-white dark:text-black font-bold rounded-none",
      linkInactive: "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white rounded-none transition-none hover:bg-gray-200 dark:hover:bg-gray-800"
    },
    header: "h-16 flex flex-shrink-0 items-center justify-between px-6 bg-white dark:bg-black z-30 relative transition-none border-b border-black dark:border-white",
    breadcrumb: "w-full bg-white dark:bg-black flex items-center px-6 py-3 z-10 text-sm font-bold text-black dark:text-white transition-none border-b border-black dark:border-white uppercase"
  },
  dashboard: {
    statIcon: "rounded-none bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white p-3",
    badge: "rounded-none bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-xs font-bold uppercase",
    taskCircle: "w-4 h-4 rounded-none bg-black dark:bg-white",
    tabContainer: "flex bg-white dark:bg-black p-0 border border-black dark:border-white rounded-none w-fit",
    tabActive: "bg-black dark:bg-white text-white dark:text-black rounded-none font-bold",
    tabInactive: "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 rounded-none",
    txIcon: "w-10 h-10 rounded-none bg-white dark:bg-black flex items-center justify-center text-black dark:text-white border border-black dark:border-white",
    txRow: "border-b border-black dark:border-white last:border-0 hover:bg-gray-200 dark:hover:bg-gray-800 transition-none rounded-none px-4",
    incomeItem: "flex flex-col p-4 bg-white dark:bg-black rounded-none border border-black dark:border-white text-black dark:text-white transition-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
  },
  profile: {
    avatarWrapper: "bg-white dark:bg-black rounded-none p-2 border border-black dark:border-white",
    avatarInner: "border-none rounded-none filter grayscale",
    editBtn: "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-none transition-none font-bold px-6 border border-black dark:border-white uppercase",
    tabsList: "mb-6 bg-white dark:bg-black w-full justify-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-b border-black dark:border-white rounded-none",
    socialLink: "bg-white dark:bg-black rounded-none text-black dark:text-white border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-none",
    connectionCount: "bg-black dark:bg-white text-white dark:text-black rounded-none font-bold px-3",
    connectionItem: "bg-white dark:bg-black rounded-none p-4 border border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-none",
    projectIcon: "bg-white dark:bg-black rounded-none text-black dark:text-white p-2 border border-black dark:border-white",
    progressTrack: "bg-white dark:bg-black rounded-none overflow-hidden h-3 border border-black dark:border-white",
    avatarBorder: "border-transparent",
    newProjectCard: "border border-black dark:border-white bg-white dark:bg-black rounded-none min-h-[280px] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white transition-none cursor-pointer flex flex-col items-center justify-center font-bold uppercase"
  },
  settings: {
    btnActive: "bg-black dark:bg-white text-white dark:text-black font-bold rounded-none border border-black dark:border-white",
    btnInactive: "bg-white dark:bg-black text-gray-500 border border-black dark:border-white hover:text-black dark:hover:text-white rounded-none font-bold",
    colorActive: "ring-2 ring-black dark:ring-white ring-offset-2 ring-offset-white dark:ring-offset-black rounded-none",
    colorInactive: "rounded-none border border-black dark:border-white hover:bg-black dark:hover:bg-white",
    switchTrackActive: "bg-black dark:bg-white rounded-none border border-black dark:border-white",
    switchTrackInactive: "bg-white dark:bg-black border border-black dark:border-white rounded-none",
    fontActive: "bg-black dark:bg-white text-white dark:text-black font-bold rounded-none px-4",
    fontInactive: "bg-white dark:bg-black text-black dark:text-white font-bold hover:bg-gray-200 dark:hover:bg-gray-800 rounded-none px-4 border border-black dark:border-white",
    sliderTrack: "bg-white dark:bg-black border border-black dark:border-white rounded-none h-4 accent-black dark:accent-white"
  },
  avatar: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden bg-white dark:bg-black border border-black dark:border-white rounded-none",
    image: "aspect-square h-full w-full object-cover filter grayscale",
    fallback: "flex h-full w-full items-center justify-center bg-white dark:bg-black text-black dark:text-white font-bold text-sm uppercase"
  },
  tabs: {
    list: "inline-flex items-center justify-center bg-white dark:bg-black p-0 border border-black dark:border-white rounded-none",
    trigger: "inline-flex items-center justify-center whitespace-nowrap px-6 py-2 text-sm font-bold transition-none data-[state=active]:bg-black dark:data-[state=active]:bg-white data-[state=active]:text-white dark:data-[state=active]:text-black uppercase rounded-none border-none"
  },
  typography: {
    h1: "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-black dark:text-white uppercase",
    h2: "scroll-m-20 pb-2 text-3xl font-bold tracking-tight text-black dark:text-white uppercase border-b border-black dark:border-white",
    h3: "scroll-m-20 text-2xl font-bold tracking-tight text-black dark:text-white uppercase",
    p: "leading-7 text-gray-800 dark:text-gray-200"
  },
  card: "bg-white dark:bg-black border border-black dark:border-white p-6 transition-none rounded-none",
  button: {
    base: "py-2 px-6 text-sm font-bold transition-none flex items-center justify-center gap-2 uppercase rounded-none border border-black dark:border-white",
    primary: "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200",
    secondary: "bg-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
    outline: "bg-transparent text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
  },
  input: "w-full bg-white dark:bg-black rounded-none border border-black dark:border-white outline-none focus:ring-1 focus:ring-black dark:focus:ring-white shadow-none text-black dark:text-white placeholder-gray-400 transition-none",
  switch: {
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-none border border-black dark:border-white transition-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black dark:focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-black dark:data-[state=checked]:bg-white data-[state=unchecked]:bg-white dark:data-[state=unchecked]:bg-black",
    thumb: "pointer-events-none block h-5 w-5 rounded-none bg-black dark:bg-white data-[state=checked]:bg-white dark:data-[state=checked]:bg-black shadow-none ring-0 transition-none data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 border border-black dark:border-white"
  },
  checkbox: {
    root: "peer h-5 w-5 shrink-0 rounded-none border border-black dark:border-white bg-white dark:bg-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black dark:focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-black dark:data-[state=checked]:bg-white data-[state=checked]:text-white dark:data-[state=checked]:text-black transition-none",
    icon: "h-4 w-4"
  },
  slider: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-2 w-full grow overflow-hidden rounded-none border border-black dark:border-white bg-white dark:bg-black",
    range: "absolute h-full bg-black dark:bg-white",
    thumb: "block h-5 w-5 rounded-none border border-black dark:border-white bg-white dark:bg-black shadow-none transition-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black dark:focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
  },
  tooltip: "z-50 overflow-hidden rounded-none bg-black dark:bg-white px-3 py-1.5 text-sm font-semibold text-white dark:text-black border border-black dark:border-white shadow-none animate-in fade-in-0 zoom-in-95 uppercase",
  badge: "inline-flex items-center rounded-none border border-black dark:border-white px-2.5 py-0.5 text-xs font-semibold transition-none focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white bg-black dark:bg-white text-white dark:text-black uppercase",
  popover: "z-50 w-72 rounded-none bg-white dark:bg-black p-4 text-black dark:text-white border border-black dark:border-white shadow-none outline-none animate-in zoom-in-95",

  label: "text-sm font-semibold text-black dark:text-white uppercase tracking-widest",
  radio: {
      root: "grid gap-2",
      item: "aspect-square h-5 w-5 rounded-none border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white data-[state=checked]:bg-black dark:data-[state=checked]:bg-white data-[state=checked]:text-white dark:data-[state=checked]:text-black transition-all",
    },
  otp: {
      container: "flex items-center gap-2",
      slot: "relative flex h-12 w-12 items-center justify-center text-lg font-bold border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white rounded-none focus-visible:z-10 focus-visible:bg-gray-100 dark:focus-visible:bg-gray-900",
      slotActive: "z-10 bg-gray-100 dark:bg-gray-900 border-[3px]",
      slotInactive: "bg-white dark:bg-black",
    },
  toggle: {
      root: "inline-flex items-center justify-center border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white font-bold uppercase hover:bg-gray-100 dark:hover:bg-gray-900 data-[state=on]:bg-black dark:data-[state=on]:bg-white data-[state=on]:text-white dark:data-[state=on]:text-black transition-all px-4 py-2 rounded-none tracking-widest"
    },
  toggleGroup: {
      root: "flex items-center justify-center border-2 border-black dark:border-white bg-white dark:bg-black w-fit",
      item: "inline-flex items-center justify-center font-bold uppercase bg-transparent text-black dark:text-white transition-all data-[state=on]:bg-black dark:data-[state=on]:bg-white data-[state=on]:text-white dark:data-[state=on]:text-black hover:bg-gray-100 dark:hover:bg-gray-900 h-10 px-4 border-r-2 border-black dark:border-white last:border-0 rounded-none"
    },
}

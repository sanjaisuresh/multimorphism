export const bauhausTheme = {
  layout: {
    app: "h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[#F8F9FA] dark:bg-[#121212] transition-colors duration-500 font-sans",
    sidebar: {
      container: "h-full flex-col bg-white dark:bg-[#1A1A1A] z-20 relative transition-all duration-300 border-r-2 border-black dark:border-[#333]",
      linkActive: "bg-black dark:bg-white text-white dark:text-black font-bold rounded-none border-l-8 border-primary",
      linkInactive: "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white rounded-none transition-all hover:bg-gray-100 dark:hover:bg-[#2A2A2A]"
    },
    header: "h-16 flex flex-shrink-0 items-center justify-between px-6 bg-white dark:bg-[#1A1A1A] z-30 relative transition-colors duration-500 border-b-2 border-black dark:border-[#333]",
    breadcrumb: "w-full bg-[#F8F9FA] dark:bg-[#121212] flex items-center px-6 py-3 z-10 text-sm font-bold text-black dark:text-white transition-colors duration-500 border-b-2 border-black dark:border-[#333] uppercase"
  },
  dashboard: {
    statIcon: "rounded-none bg-white dark:bg-[#1A1A1A] border-2 border-black dark:border-[#333]",
    badge: "rounded-none bg-primary text-white border-none uppercase text-xs font-bold",
    taskCircle: "w-4 h-4 rounded-none bg-primary border-2 border-black dark:border-[#333]",
    tabContainer: "flex bg-gray-200 dark:bg-[#2A2A2A] p-0 rounded-none border-2 border-black dark:border-[#333]",
    tabActive: "bg-black dark:bg-white text-white dark:text-black rounded-none border-none font-bold",
    tabInactive: "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white rounded-none",
    txIcon: "w-10 h-10 rounded-none bg-white dark:bg-[#1A1A1A] flex items-center justify-center text-primary border-2 border-black dark:border-[#333]",
    txRow: "border-b-2 border-black dark:border-[#333] hover:bg-gray-100 dark:hover:bg-[#2A2A2A] transition-all rounded-none",
    incomeItem: "flex flex-col p-4 bg-white dark:bg-[#1A1A1A] border-2 border-black dark:border-[#333] text-black dark:text-white transition-all rounded-none border-l-8 border-l-primary hover:translate-x-1"
  },
  profile: {
    avatarWrapper: "bg-white dark:bg-[#1A1A1A] rounded-none p-2 border-4 border-black dark:border-white",
    avatarInner: "border-none rounded-none",
    editBtn: "bg-black dark:bg-white text-white dark:text-black hover:bg-primary dark:hover:bg-primary rounded-none transition-all uppercase tracking-wider font-bold",
    tabsList: "mb-6 bg-transparent w-full justify-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-b-4 border-black dark:border-white rounded-none space-x-2",
    socialLink: "bg-white dark:bg-[#1A1A1A] rounded-none border-2 border-black dark:border-[#333] hover:bg-primary hover:text-white hover:border-primary transition-all hover:-translate-y-1",
    connectionCount: "bg-black dark:bg-white text-white dark:text-black rounded-none font-bold",
    connectionItem: "bg-white dark:bg-[#1A1A1A] rounded-none p-4 border-2 border-black dark:border-[#333] hover:border-primary transition-all duration-300",
    projectIcon: "bg-white dark:bg-[#1A1A1A] rounded-none text-primary border-2 border-black dark:border-[#333]",
    progressTrack: "bg-gray-200 dark:bg-[#333] rounded-none overflow-hidden border-2 border-black dark:border-[#333]",
    avatarBorder: "border-transparent",
    newProjectCard: "border-4 border-dashed border-gray-300 dark:border-[#444] bg-transparent rounded-none min-h-[280px] hover:border-primary text-gray-400 dark:text-gray-500 transition-all cursor-pointer flex flex-col items-center justify-center uppercase tracking-widest font-bold"
  },
  settings: {
    btnActive: "bg-black dark:bg-white text-white dark:text-black font-bold rounded-none border-l-8 border-primary uppercase tracking-widest",
    btnInactive: "bg-white dark:bg-[#1A1A1A] text-gray-500 border-2 border-black dark:border-[#333] hover:border-primary hover:text-black dark:hover:text-white rounded-none uppercase tracking-widest font-bold",
    colorActive: "border-4 border-black dark:border-white scale-110 rounded-none",
    colorInactive: "border-2 border-black dark:border-[#333] rounded-none hover:scale-110 hover:border-primary",
    switchTrackActive: "bg-primary border-2 border-black dark:border-[#333] rounded-none",
    switchTrackInactive: "bg-gray-300 dark:bg-[#333] border-2 border-black dark:border-[#333] rounded-none",
    fontActive: "bg-black dark:bg-white text-white dark:text-black font-bold px-4 rounded-none uppercase tracking-widest",
    fontInactive: "bg-white dark:bg-[#1A1A1A] text-gray-600 dark:text-gray-400 font-bold hover:text-primary px-4 rounded-none uppercase tracking-widest border-2 border-black dark:border-[#333]",
    sliderTrack: "bg-black dark:bg-white rounded-none h-4 accent-primary"
  },
  avatar: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden bg-white dark:bg-[#1A1A1A] border-2 border-black dark:border-white rounded-none",
    image: "aspect-square h-full w-full object-cover filter grayscale",
    fallback: "flex h-full w-full items-center justify-center bg-black dark:bg-white text-white dark:text-black font-bold text-sm uppercase"
  },
  tabs: {
    list: "inline-flex items-center justify-center bg-transparent p-0 rounded-none",
    trigger: "inline-flex items-center justify-center whitespace-nowrap px-6 py-2 text-sm font-bold transition-all data-[state=active]:bg-black dark:data-[state=active]:bg-white data-[state=active]:text-white dark:data-[state=active]:text-black uppercase tracking-wider rounded-none border-2 border-transparent data-[state=inactive]:border-black dark:data-[state=inactive]:border-[#333] data-[state=inactive]:bg-white dark:data-[state=inactive]:bg-[#1A1A1A] mr-2"
  },
  typography: {
    h1: "scroll-m-20 text-4xl font-black tracking-tight lg:text-5xl text-black dark:text-white uppercase",
    h2: "scroll-m-20 pb-2 text-3xl font-black tracking-widest text-black dark:text-white uppercase border-b-4 border-black dark:border-white",
    h3: "scroll-m-20 text-2xl font-bold tracking-wider text-black dark:text-white uppercase",
    p: "leading-7 text-gray-800 dark:text-gray-200 font-medium"
  },
  card: "bg-white dark:bg-[#1A1A1A] border-4 border-black dark:border-[#333] p-6 transition-all duration-300 hover:border-primary rounded-none",
  button: {
    base: "py-2 px-6 text-sm font-black transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-widest rounded-none border-2 border-transparent",
    primary: "bg-primary text-white hover:bg-black dark:hover:bg-white dark:hover:text-black",
    secondary: "bg-black dark:bg-white text-white dark:text-black hover:bg-primary dark:hover:bg-primary dark:hover:text-white",
    outline: "bg-transparent text-black dark:text-white border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
  },
  input: "w-full bg-white dark:bg-black rounded-none border-2 border-black dark:border-white outline-none focus:ring-0 focus:border-red-500 dark:focus:border-red-500 shadow-none text-black dark:text-white placeholder-gray-400 transition-colors uppercase font-sans",
  switch: {
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-none border-2 border-black dark:border-white transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-800",
    thumb: "pointer-events-none block h-5 w-5 rounded-full bg-black dark:bg-white shadow-none ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
  },
  checkbox: {
    root: "peer h-6 w-6 shrink-0 rounded-full border-2 border-black dark:border-white bg-transparent focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-yellow-400 data-[state=checked]:text-black transition-colors",
    icon: "h-4 w-4 stroke-[3px]"
  },
  slider: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-3 w-full grow overflow-hidden rounded-none border-2 border-black dark:border-white bg-transparent",
    range: "absolute h-full bg-red-500",
    thumb: "block h-6 w-6 rounded-none border-2 border-black dark:border-white bg-blue-500 shadow-none transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 hover:bg-yellow-400"
  },
  tooltip: "z-50 overflow-hidden rounded-none bg-black dark:bg-white px-3 py-1.5 text-sm font-bold text-white dark:text-black shadow-none border border-transparent animate-in fade-in-0 zoom-in-95 uppercase tracking-widest",
  badge: "inline-flex items-center rounded-none border-2 border-black dark:border-white px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-0 bg-yellow-400 text-black uppercase tracking-widest",
  popover: "z-50 w-72 rounded-none bg-white dark:bg-black p-4 text-black dark:text-white border-4 border-black dark:border-white shadow-[8px_8px_0_0_rgba(239,68,68,1)] dark:shadow-[8px_8px_0_0_rgba(239,68,68,1)] outline-none animate-in zoom-in-95",

  label: "text-sm font-bold text-[#000000] dark:text-[#ffffff] uppercase tracking-wider",
  radio: {
      root: "grid gap-2",
      item: "aspect-square h-6 w-6 rounded-full border-4 border-[#000000] dark:border-[#ffffff] bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff] data-[state=checked]:bg-[#FF0000] data-[state=checked]:border-[#000000] dark:data-[state=checked]:border-[#ffffff] transition-all",
    },
  otp: {
      container: "flex items-center gap-2",
      slot: "relative flex h-14 w-12 items-center justify-center text-xl font-bold border-4 border-[#000000] dark:border-[#ffffff] bg-[#F2C94C] text-[#000000] focus-visible:z-10 focus-visible:border-[#FF0000]",
      slotActive: "z-10 border-[#FF0000] bg-[#FF0000] text-[#ffffff]",
      slotInactive: "bg-[#F2C94C]",
    },
  toggle: {
      root: "inline-flex items-center justify-center border-4 border-[#000000] dark:border-[#ffffff] bg-[#0055FF] text-[#ffffff] font-bold uppercase tracking-wider hover:bg-[#FF0000] data-[state=on]:bg-[#FF0000] data-[state=on]:text-[#ffffff] transition-all px-6 py-2 rounded-full"
    },
  toggleGroup: {
      root: "flex items-center justify-center bg-[#F2C94C] border-4 border-[#000000] dark:border-[#ffffff] rounded-full p-1 w-fit",
      item: "inline-flex items-center justify-center font-bold uppercase rounded-full bg-transparent text-[#000000] transition-all data-[state=on]:bg-[#0055FF] data-[state=on]:text-[#ffffff] hover:bg-[#000000]/10 h-10 px-4"
    },
}

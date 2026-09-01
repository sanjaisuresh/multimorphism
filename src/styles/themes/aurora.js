export const auroraTheme = {
  layout: {
    app: "h-screen w-full flex flex-col md:flex-row overflow-hidden bg-glass-animated text-black dark:text-white transition-colors duration-500 font-sans tracking-wide",
    sidebar: {
      container: "h-full flex-col bg-white/20 dark:bg-black/20 backdrop-blur-3xl z-20 relative transition-all duration-300 border-none",
      linkActive: "bg-white/40 dark:bg-black/40 text-black dark:text-white font-bold rounded-[2rem] shadow-[0_0_20px_rgba(255,255,255,0.3)] dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/30 dark:border-white/10",
      linkInactive: "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white rounded-[2rem] transition-all hover:bg-white/20 dark:hover:bg-black/20"
    },
    header: "h-16 flex flex-shrink-0 items-center justify-between px-6 bg-white/10 dark:bg-black/10 backdrop-blur-2xl z-30 relative transition-colors duration-500 border-none",
    breadcrumb: "w-full bg-transparent flex items-center px-6 py-3 z-10 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-500"
  },
  dashboard: {
    statIcon: "rounded-[2rem] bg-white/20 dark:bg-black/20 text-black dark:text-white p-4 shadow-[0_0_15px_rgba(255,255,255,0.2)]",
    badge: "rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md text-black dark:text-white px-4 py-1 text-xs font-bold border border-white/20",
    taskCircle: "w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_currentColor]",
    tabContainer: "flex bg-white/10 dark:bg-black/10 backdrop-blur-xl p-1.5 rounded-[2rem] border border-white/20 dark:border-white/10 w-fit",
    tabActive: "bg-white/40 dark:bg-black/40 text-black dark:text-white rounded-3xl shadow-[0_0_20px_rgba(255,255,255,0.3)] dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] font-bold px-6",
    tabInactive: "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white rounded-3xl px-6",
    txIcon: "w-12 h-12 rounded-full bg-white/20 dark:bg-black/20 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(255,255,255,0.2)]",
    txRow: "border-b border-white/10 dark:border-white/5 last:border-0 hover:bg-white/20 dark:hover:bg-black/20 transition-all rounded-[2rem] px-4",
    incomeItem: "flex flex-col p-5 bg-white/10 dark:bg-black/10 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 dark:border-white/10 text-black dark:text-white transition-all hover:bg-white/20 dark:hover:bg-black/20 hover:scale-[1.02]"
  },
  profile: {
    avatarWrapper: "bg-white/20 dark:bg-black/20 backdrop-blur-2xl rounded-full p-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]",
    avatarInner: "border-0 rounded-full",
    editBtn: "bg-white/30 dark:bg-black/30 backdrop-blur-xl text-black dark:text-white hover:bg-white/50 dark:hover:bg-black/50 border border-white/30 dark:border-white/10 rounded-full transition-all font-bold px-8 shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    tabsList: "mb-6 bg-transparent w-full justify-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-b border-white/20 dark:border-white/10 rounded-none",
    socialLink: "bg-white/20 dark:bg-black/20 backdrop-blur-xl rounded-full text-gray-800 dark:text-gray-200 hover:bg-white/40 dark:hover:bg-black/40 hover:scale-110 transition-all shadow-sm",
    connectionCount: "bg-white/40 dark:bg-black/40 text-black dark:text-white rounded-full font-bold px-4",
    connectionItem: "bg-white/10 dark:bg-black/10 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 dark:border-white/10 p-5 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300",
    projectIcon: "bg-white/20 dark:bg-black/20 rounded-[2rem] text-primary p-3 shadow-[0_0_15px_rgba(255,255,255,0.2)]",
    progressTrack: "bg-black/10 dark:bg-white/10 rounded-full overflow-hidden h-3 shadow-inner",
    avatarBorder: "border-transparent",
    newProjectCard: "border border-white/30 dark:border-white/10 bg-white/5 dark:bg-black/5 backdrop-blur-xl rounded-[2.5rem] min-h-[280px] hover:bg-white/10 dark:hover:bg-black/10 text-gray-700 dark:text-gray-300 transition-all cursor-pointer flex flex-col items-center justify-center font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)]"
  },
  settings: {
    btnActive: "bg-white/40 dark:bg-black/40 text-black dark:text-white shadow-[0_0_20px_rgba(255,255,255,0.3)] dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-[2rem] font-bold border border-white/30 dark:border-white/10",
    btnInactive: "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-black/20 rounded-[2rem] font-medium",
    colorActive: "ring-2 ring-white ring-offset-4 ring-offset-transparent scale-110 shadow-[0_0_20px_currentColor]",
    colorInactive: "hover:scale-110 transition-transform opacity-80 hover:opacity-100",
    switchTrackActive: "bg-white/40 dark:bg-black/40 border border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.5)] rounded-full",
    switchTrackInactive: "bg-black/20 dark:bg-white/20 rounded-full",
    fontActive: "bg-white/30 dark:bg-black/30 text-black dark:text-white font-bold rounded-[2rem] px-6 shadow-sm",
    fontInactive: "bg-transparent text-gray-700 dark:text-gray-300 font-medium hover:bg-white/20 dark:hover:bg-black/20 rounded-[2rem] px-6",
    sliderTrack: "bg-black/10 dark:bg-white/20 rounded-full h-2 accent-white"
  },
  avatar: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden bg-white/20 dark:bg-black/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]",
    image: "aspect-square h-full w-full object-cover",
    fallback: "flex h-full w-full items-center justify-center bg-transparent text-black dark:text-white font-bold text-sm"
  },
  tabs: {
    list: "inline-flex items-center justify-center bg-white/10 dark:bg-black/10 backdrop-blur-xl p-1.5 rounded-[2rem] border border-white/20 dark:border-white/10",
    trigger: "inline-flex items-center justify-center whitespace-nowrap px-6 py-2 text-sm font-bold transition-all data-[state=active]:bg-white/40 dark:data-[state=active]:bg-black/40 data-[state=active]:text-black dark:data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(255,255,255,0.3)] rounded-3xl"
  },
  typography: {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-black dark:text-white drop-shadow-md",
    h2: "scroll-m-20 pb-2 text-3xl font-bold tracking-tight text-black dark:text-white drop-shadow-sm",
    h3: "scroll-m-20 text-2xl font-bold tracking-tight text-black dark:text-white",
    p: "leading-7 text-gray-800 dark:text-gray-200 font-medium"
  },
  card: "bg-white/10 dark:bg-black/10 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] border border-white/20 dark:border-white/5 p-6 transition-all duration-500 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] hover:bg-white/20 dark:hover:bg-black/20",
  button: {
    base: "py-3 px-6 text-sm font-bold transition-all duration-500 flex items-center justify-center gap-2 rounded-[2rem]",
    primary: "bg-white/40 dark:bg-black/40 text-black dark:text-white shadow-[0_0_20px_rgba(255,255,255,0.3)] dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/30 dark:border-white/10 hover:bg-white/60 dark:hover:bg-black/60 hover:scale-105",
    secondary: "bg-white/10 dark:bg-black/10 text-black dark:text-white border border-white/20 dark:border-white/5 hover:bg-white/30 dark:hover:bg-black/30 hover:scale-105",
    outline: "bg-transparent text-black dark:text-white border-2 border-white/30 dark:border-white/10 hover:border-white/50 dark:hover:border-white/30 hover:bg-white/10 dark:hover:bg-black/10"
  },
  input: "w-full bg-white/10 dark:bg-black/10 backdrop-blur-xl rounded-2xl border border-white/20 outline-none focus:ring-2 focus:ring-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_0_15px_rgba(255,255,255,0.1)] text-white placeholder-white/50 transition-all",
  switch: {
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white/40 data-[state=unchecked]:bg-black/20 backdrop-blur-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]",
    thumb: "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
  },
  checkbox: {
    root: "peer h-5 w-5 shrink-0 rounded-md border border-white/30 bg-white/10 backdrop-blur-xl shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white/40 data-[state=checked]:text-white data-[state=checked]:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all",
    icon: "h-4 w-4"
  },
  slider: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-2 w-full grow overflow-hidden rounded-full bg-white/10 backdrop-blur-xl border border-white/10",
    range: "absolute h-full bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.5)]",
    thumb: "block h-5 w-5 rounded-full border border-white/40 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-110"
  },
  tooltip: "z-50 overflow-hidden rounded-xl bg-white/20 backdrop-blur-2xl px-3 py-1.5 text-sm font-medium text-white border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.3)] animate-in fade-in-0 zoom-in-95",
  badge: "inline-flex items-center rounded-full border border-white/30 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white shadow-[0_0_10px_rgba(255,255,255,0.2)] bg-white/20 backdrop-blur-xl text-white",
  popover: "z-50 w-72 rounded-2xl bg-white/10 backdrop-blur-2xl p-4 text-white border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.3)] outline-none animate-in zoom-in-95",

  label: "text-sm font-medium text-white/80 tracking-wide",
  radio: {
      root: "grid gap-2",
      item: "aspect-square h-5 w-5 rounded-full border border-white/40 bg-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)] text-white data-[state=checked]:bg-white/50 data-[state=checked]:border-white/80 transition-all",
    },
  otp: {
      container: "flex items-center gap-2",
      slot: "relative flex h-12 w-12 items-center justify-center text-lg border border-white/30 bg-white/5 backdrop-blur-xl text-white rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-white/50",
      slotActive: "z-10 border-white/60 bg-white/20 shadow-[0_0_20px_rgba(255,255,255,0.2)]",
      slotInactive: "bg-white/5",
    },
  toggle: {
      root: "inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-xl text-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] data-[state=on]:bg-white/40 data-[state=on]:border-white/60 data-[state=on]:shadow-[inset_0_2px_5px_rgba(255,255,255,0.5),0_0_20px_rgba(255,255,255,0.4)] transition-all px-5 py-2"
    },
  toggleGroup: {
      root: "flex items-center justify-center gap-1 border border-white/20 bg-white/5 backdrop-blur-xl p-1 rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] w-fit",
      item: "inline-flex items-center justify-center rounded-full text-white/80 transition-all data-[state=on]:bg-white/30 data-[state=on]:text-white data-[state=on]:shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] hover:bg-white/10 hover:text-white h-9 px-4"
    },
}

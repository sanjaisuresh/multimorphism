export const holographicTheme = {
  layout: {
    app: "h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-purple-700 dark:from-fuchsia-900 dark:via-cyan-900 dark:to-purple-900 animate-gradient-slow",
    sidebar: {
      container: "h-full flex-col bg-white/20 dark:bg-black/20 backdrop-blur-3xl z-20 relative border-r border-white/50 dark:border-white/20 shadow-[8px_0_30px_rgba(255,0,255,0.15)] transition-all duration-300",
      linkActive: "bg-white/40 dark:bg-white/20 shadow-[inset_0_2px_10px_rgba(255,255,255,0.4)] text-purple-900 dark:text-fuchsia-200 font-bold rounded-2xl",
      linkInactive: "text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-white/10 hover:text-purple-900 dark:hover:text-fuchsia-200 rounded-2xl"
    },
    header: "h-16 flex flex-shrink-0 items-center justify-between px-6 bg-white/20 dark:bg-black/20 backdrop-blur-3xl z-30 relative border-b border-white/50 dark:border-white/20 shadow-[0_8px_30px_rgba(0,255,255,0.15)] transition-colors duration-300",
    breadcrumb: "w-full bg-white/10 dark:bg-black/10 backdrop-blur-xl border-b border-white/30 dark:border-white/10 flex items-center px-6 py-3 shadow-sm z-10 text-sm font-semibold text-purple-900/80 dark:text-fuchsia-200/80 transition-colors duration-300"
  },
  dashboard: {
    statIcon: "rounded-2xl border border-white/60 dark:border-white/30 bg-gradient-to-tr from-white/40 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.5)]",
    badge: "rounded-full border border-white/60 dark:border-white/30 bg-gradient-to-tr from-white/40 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.3)]",
    taskCircle: "w-3 h-3 rounded-full bg-white/80 border border-white",
    tabContainer: "flex bg-white/20 dark:bg-black/20 p-1.5 rounded-2xl backdrop-blur-md border border-white/30",
    tabActive: "bg-gradient-to-r from-fuchsia-400/50 to-cyan-400/50 dark:from-fuchsia-600/50 dark:to-cyan-600/50 shadow-[0_4px_15px_rgba(255,0,255,0.2)] text-purple-900 dark:text-white rounded-xl font-bold border border-white/50",
    tabInactive: "text-gray-700 dark:text-gray-300 hover:text-purple-900 dark:hover:text-white",
    txIcon: "w-10 h-10 rounded-2xl bg-gradient-to-tr from-fuchsia-300/60 to-cyan-300/60 dark:from-fuchsia-800/60 dark:to-cyan-800/60 backdrop-blur-xl border border-white/50 flex items-center justify-center text-purple-900 dark:text-white shadow-[0_4px_15px_rgba(0,255,255,0.3)]",
    txRow: "border-b border-white/20 dark:border-white/10 last:border-0 hover:bg-white/30 dark:hover:bg-white/10 transition-colors rounded-xl",
    incomeItem: "flex flex-col bg-white/30 dark:bg-black/30 backdrop-blur-xl p-4 rounded-3xl border border-white/50 dark:border-white/20 shadow-[0_8px_30px_rgba(255,255,255,0.2)]"
  },
  profile: {
    avatarWrapper: "bg-gradient-to-br from-fuchsia-400/50 via-cyan-400/50 to-purple-500/50 backdrop-blur-2xl border-2 border-white/60 shadow-[0_15px_35px_rgba(255,0,255,0.3)] rounded-[2.5rem] p-3",
    avatarInner: "bg-white/40 dark:bg-black/40 rounded-[2rem] overflow-hidden backdrop-blur-xl",
    editBtn: "bg-white/60 dark:bg-white/20 backdrop-blur-xl border border-white/50 shadow-[0_4px_15px_rgba(255,255,255,0.4)] hover:scale-110",
    tabsList: "mb-6 bg-white/20 dark:bg-black/20 backdrop-blur-2xl p-2 rounded-2xl w-full justify-start border border-white/40 dark:border-white/10 shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)]",
    socialLink: "bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-white/50 rounded-2xl hover:bg-gradient-to-tr hover:from-fuchsia-400/60 hover:to-cyan-400/60 shadow-[0_4px_15px_rgba(255,255,255,0.2)]",
    connectionCount: "bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-white/50 text-purple-900 dark:text-fuchsia-100 font-bold",
    connectionItem: "bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/40 dark:border-white/10 hover:bg-white/40 dark:hover:bg-white/20 rounded-[2rem] shadow-[0_8px_25px_rgba(0,0,0,0.05)]",
    projectIcon: "bg-gradient-to-tr from-cyan-300/50 to-purple-300/50 dark:from-cyan-800/50 dark:to-purple-800/50 backdrop-blur-xl border border-white/50 rounded-2xl text-purple-900 dark:text-white shadow-[0_4px_15px_rgba(0,255,255,0.2)]",
    progressTrack: "bg-black/10 dark:bg-white/10 rounded-full overflow-hidden",
    avatarBorder: "border-2 border-white/60",
    newProjectCard: "border-2 border-dashed border-white/50 dark:border-white/20 bg-white/10 hover:bg-white/30 backdrop-blur-xl min-h-[280px] rounded-[2.5rem]"
  },
  settings: {
    btnActive: "bg-gradient-to-r from-fuchsia-400/60 to-cyan-400/60 dark:from-fuchsia-600/60 dark:to-cyan-600/60 backdrop-blur-2xl rounded-2xl text-purple-900 dark:text-white font-bold ring-2 ring-white/80 shadow-[0_10px_30px_rgba(255,0,255,0.3)]",
    btnInactive: "bg-white/20 dark:bg-black/20 backdrop-blur-xl rounded-2xl text-gray-700 dark:text-gray-300 hover:text-purple-900 dark:hover:text-white border border-white/40",
    colorActive: "ring-2 ring-white ring-offset-2 ring-offset-transparent scale-125 shadow-[0_0_20px_rgba(255,255,255,0.8)]",
    colorInactive: "hover:scale-110 opacity-80 hover:opacity-100 shadow-[0_4px_10px_rgba(0,0,0,0.2)]",
    switchTrackActive: "bg-gradient-to-r from-fuchsia-400/80 to-cyan-400/80 border border-white/60 shadow-[0_0_15px_rgba(255,0,255,0.4)]",
    switchTrackInactive: "bg-black/10 dark:bg-white/10 backdrop-blur-xl border border-white/30",
    fontActive: "rounded-2xl bg-gradient-to-r from-cyan-300/50 to-fuchsia-300/50 backdrop-blur-xl text-purple-900 dark:text-white font-bold border-2 border-white/80 shadow-[0_8px_20px_rgba(0,255,255,0.3)]",
    fontInactive: "rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-xl text-gray-700 dark:text-gray-300 font-medium hover:bg-white/40 border border-white/30",
    sliderTrack: "bg-black/10 dark:bg-white/10 backdrop-blur-xl rounded-full border border-white/30"
  },
  avatar: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white/60 shadow-[0_8px_20px_rgba(255,255,255,0.3)]",
    image: "aspect-square h-full w-full object-cover",
    fallback: "flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-300/60 to-cyan-300/60 backdrop-blur-md text-purple-900 dark:text-white font-bold text-sm"
  },
  tabs: {
    list: "inline-flex items-center justify-center rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-3xl p-1.5 border border-white/40 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]",
    trigger: "inline-flex items-center justify-center whitespace-nowrap rounded-xl px-4 py-2 text-sm font-bold transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-fuchsia-400/50 data-[state=active]:to-cyan-400/50 data-[state=active]:text-purple-900 dark:data-[state=active]:text-white data-[state=active]:shadow-[0_4px_15px_rgba(255,0,255,0.2)] data-[state=active]:border data-[state=active]:border-white/50"
  },
  typography: {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-fuchsia-600 to-cyan-600 dark:from-fuchsia-300 dark:via-cyan-200 dark:to-purple-300 drop-shadow-sm",
    h2: "scroll-m-20 border-b border-white/30 pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0 text-purple-900 dark:text-fuchsia-100",
    h3: "scroll-m-20 text-2xl font-bold tracking-tight text-purple-900 dark:text-fuchsia-100",
    p: "leading-relaxed text-gray-800 dark:text-gray-200 font-medium"
  },
  card: "bg-white/30 dark:bg-black/30 backdrop-blur-[50px] rounded-[3rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_25px_50px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_25px_50px_rgba(0,0,0,0.4)] border border-white/50 dark:border-white/20 p-6 md:p-8 transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_30px_60px_rgba(255,0,255,0.2)]",
  button: {
    base: "py-3 px-6 text-sm font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2",
    primary: "bg-gradient-to-r from-fuchsia-500/80 to-cyan-500/80 backdrop-blur-xl text-white border border-white/60 shadow-[0_10px_25px_rgba(255,0,255,0.3)] hover:scale-105 active:scale-95",
    secondary: "bg-white/40 dark:bg-white/10 backdrop-blur-xl text-purple-900 dark:text-white border border-white/50 shadow-[0_8px_20px_rgba(0,255,255,0.1)] hover:bg-white/60 active:scale-95",
    outline: "bg-transparent text-purple-900 dark:text-fuchsia-200 border-2 border-white/60 backdrop-blur-md hover:bg-white/40 active:scale-95 shadow-[0_4px_15px_rgba(255,255,255,0.2)]"
  },
  input: "w-full bg-white/40 dark:bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/60 dark:border-white/20 outline-none focus:bg-white/60 focus:border-fuchsia-400 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] text-purple-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 transition-all px-4 py-3 font-medium",
  switch: {
    root: "peer inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border border-white/50 transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-fuchsia-400/80 data-[state=checked]:to-cyan-400/80 data-[state=unchecked]:bg-white/20 backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)]",
    thumb: "pointer-events-none block h-6 w-6 rounded-full bg-white shadow-[0_4px_10px_rgba(0,0,0,0.3)] ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1"
  },
  checkbox: {
    root: "peer h-6 w-6 shrink-0 rounded-xl border-2 border-white/60 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_5px_rgba(0,0,0,0.1)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gradient-to-tr data-[state=checked]:from-fuchsia-400 data-[state=checked]:to-cyan-400 data-[state=checked]:text-white data-[state=checked]:border-white",
    icon: "h-4 w-4"
  },
  slider: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-3 w-full grow overflow-hidden rounded-full bg-white/20 dark:bg-black/30 backdrop-blur-xl border border-white/40",
    range: "absolute h-full bg-gradient-to-r from-fuchsia-400 to-cyan-400",
    thumb: "block h-7 w-7 rounded-full border-2 border-white bg-white backdrop-blur-2xl shadow-[0_4px_15px_rgba(255,0,255,0.4)] transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
  },
  tooltip: "z-50 overflow-hidden rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-3xl px-4 py-2 text-sm font-bold text-purple-900 dark:text-fuchsia-200 shadow-[0_15px_35px_rgba(255,0,255,0.2)] border border-white/60 dark:border-white/20 animate-in fade-in-0 zoom-in-95",
  badge: "inline-flex items-center rounded-full border border-white/60 bg-white/40 dark:bg-white/10 backdrop-blur-xl px-3 py-1.5 text-xs font-bold transition-colors text-purple-900 dark:text-white shadow-[0_4px_15px_rgba(255,255,255,0.4)]",
  popover: "z-50 w-72 rounded-[2.5rem] bg-white/60 dark:bg-black/60 backdrop-blur-[50px] p-6 text-purple-900 dark:text-white shadow-[0_20px_50px_rgba(255,0,255,0.2)] border border-white/60 dark:border-white/20 outline-none animate-in zoom-in-95",
  
  label: "text-sm font-bold text-purple-900/70 dark:text-fuchsia-200/70 ml-1",
  radio: {
    root: "grid gap-3",
    item: "aspect-square h-6 w-6 rounded-full border-2 border-white/60 bg-white/30 backdrop-blur-xl shadow-[inset_0_2px_5px_rgba(0,0,0,0.1)] text-fuchsia-600 dark:text-fuchsia-300 data-[state=checked]:bg-white/80 transition-all",
  },
  otp: {
    container: "flex items-center gap-3",
    slot: "relative flex h-14 w-12 items-center justify-center text-2xl font-bold bg-white/40 dark:bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/50 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] focus-visible:z-10 text-purple-900 dark:text-white",
    slotActive: "z-10 bg-white/60 dark:bg-white/20 border-white/80 scale-110 shadow-[0_8px_20px_rgba(255,0,255,0.2)] transition-all",
    slotInactive: "",
  },
  toggle: {
    root: "inline-flex items-center justify-center rounded-2xl bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/40 hover:bg-white/50 data-[state=on]:bg-gradient-to-r data-[state=on]:from-fuchsia-400/60 data-[state=on]:to-cyan-400/60 data-[state=on]:border-white/80 data-[state=on]:text-purple-900 dark:data-[state=on]:text-white transition-all px-4 py-2 font-bold"
  },
  toggleGroup: {
    root: "flex items-center justify-center gap-2 bg-white/20 dark:bg-black/20 p-2 rounded-2xl backdrop-blur-3xl w-fit border border-white/40 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]",
    item: "inline-flex items-center justify-center rounded-xl transition-all data-[state=on]:bg-gradient-to-r data-[state=on]:from-fuchsia-400/60 data-[state=on]:to-cyan-400/60 data-[state=on]:text-purple-900 dark:data-[state=on]:text-white data-[state=on]:border data-[state=on]:border-white/60 hover:bg-white/40 h-10 px-4 text-sm font-bold"
  },
}

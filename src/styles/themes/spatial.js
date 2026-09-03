export const spatialTheme = {
  layout: {
    app: "h-screen w-full flex flex-col md:flex-row overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-black",
    sidebar: {
      container: "h-full flex-col bg-white/20 dark:bg-white/5 backdrop-blur-3xl z-20 relative border-r border-white/30 dark:border-white/10 shadow-[inset_-1px_0_0_rgba(255,255,255,0.1)] transition-all duration-500",
      linkActive: "bg-white/40 dark:bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] text-dark font-semibold rounded-2xl",
      linkInactive: "text-gray-600 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-white/5 hover:text-dark rounded-2xl"
    },
    header: "h-16 flex flex-shrink-0 items-center justify-between px-6 bg-white/20 dark:bg-white/5 backdrop-blur-3xl z-30 relative border-b border-white/30 dark:border-white/10 transition-colors duration-500",
    breadcrumb: "w-full bg-transparent flex items-center px-6 py-3 z-10 text-sm font-medium text-gray-500 transition-colors duration-500"
  },
  dashboard: {
    statIcon: "rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/40 dark:border-white/20",
    badge: "rounded-full bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20",
    taskCircle: "w-3 h-3 rounded-full bg-white/50 border border-white/60",
    tabContainer: "flex bg-black/5 dark:bg-white/5 p-1 rounded-full backdrop-blur-xl",
    tabActive: "bg-white/60 dark:bg-white/20 shadow-[0_2px_10px_rgba(0,0,0,0.1)] text-dark rounded-full",
    tabInactive: "text-gray-500 hover:text-dark",
    txIcon: "w-10 h-10 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center text-dark",
    txRow: "border-b border-white/10 last:border-0 hover:bg-white/10 transition-colors rounded-xl",
    incomeItem: "flex flex-col bg-white/20 dark:bg-white/5 backdrop-blur-xl p-4 rounded-3xl border border-white/30 dark:border-white/10"
  },
  profile: {
    avatarWrapper: "bg-white/30 dark:bg-white/10 backdrop-blur-3xl border border-white/40 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)]",
    avatarInner: "bg-transparent rounded-full overflow-hidden",
    editBtn: "bg-white/50 dark:bg-white/20 backdrop-blur-md border border-white/40 hover:scale-105",
    tabsList: "mb-6 bg-white/20 dark:bg-white/5 backdrop-blur-2xl p-1.5 rounded-full w-full justify-start border border-white/30 dark:border-white/10",
    socialLink: "bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/30 rounded-full hover:bg-white/50",
    connectionCount: "bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/30 text-dark",
    connectionItem: "bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 hover:bg-white/30 rounded-[2rem]",
    projectIcon: "bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl text-dark",
    progressTrack: "bg-black/10 dark:bg-white/10 rounded-full",
    avatarBorder: "border-2 border-white/40",
    newProjectCard: "border border-white/30 dark:border-white/10 bg-white/10 hover:bg-white/30 backdrop-blur-xl min-h-[280px] rounded-[2.5rem]"
  },
  settings: {
    btnActive: "bg-white/50 dark:bg-white/20 backdrop-blur-2xl rounded-2xl text-dark ring-1 ring-white/50 shadow-[0_8px_20px_rgba(0,0,0,0.1)]",
    btnInactive: "bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl text-gray-500 hover:text-dark border border-white/20",
    colorActive: "ring-2 ring-white/80 ring-offset-2 ring-offset-transparent scale-110",
    colorInactive: "hover:scale-110 opacity-80 hover:opacity-100",
    switchTrackActive: "bg-white/40 dark:bg-white/20 backdrop-blur-xl border border-white/50",
    switchTrackInactive: "bg-black/10 dark:bg-white/5 backdrop-blur-xl border border-white/20",
    fontActive: "rounded-2xl bg-white/50 dark:bg-white/20 backdrop-blur-xl text-dark font-bold border border-white/50",
    fontInactive: "rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl text-gray-500 font-medium hover:bg-white/30",
    sliderTrack: "bg-black/10 dark:bg-white/10 backdrop-blur-xl rounded-full"
  },
  avatar: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/40 shadow-[0_4px_12px_rgba(0,0,0,0.1)]",
    image: "aspect-square h-full w-full object-cover",
    fallback: "flex h-full w-full items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-dark font-medium text-sm"
  },
  tabs: {
    list: "inline-flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-2xl p-1",
    trigger: "inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all data-[state=active]:bg-white/60 dark:data-[state=active]:bg-white/20 data-[state=active]:text-dark data-[state=active]:shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
  },
  typography: {
    h1: "scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl text-dark drop-shadow-sm",
    h2: "scroll-m-20 border-b border-white/20 pb-2 text-3xl font-medium tracking-tight transition-colors first:mt-0 text-dark",
    h3: "scroll-m-20 text-2xl font-medium tracking-tight text-dark",
    p: "leading-relaxed text-gray-700 dark:text-gray-300 font-light"
  },
  card: "bg-white/30 dark:bg-black/30 backdrop-blur-[40px] rounded-[2.5rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.3)] p-6 md:p-8 transition-all duration-500",
  button: {
    base: "py-2.5 px-5 text-sm font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2",
    primary: "bg-white/70 dark:bg-white/20 backdrop-blur-xl text-dark border border-white/50 dark:border-white/20 shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:bg-white/90 active:scale-95",
    secondary: "bg-black/5 dark:bg-white/5 backdrop-blur-xl text-dark border border-white/20 hover:bg-black/10 active:scale-95",
    outline: "bg-transparent text-dark border border-white/40 backdrop-blur-md hover:bg-white/20 active:scale-95"
  },
  input: "w-full bg-white/20 dark:bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/40 dark:border-white/10 outline-none focus:bg-white/40 focus:border-white/60 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] text-dark placeholder-gray-500 transition-all px-4 py-3",
  switch: {
    root: "peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border border-white/30 transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white/50 dark:data-[state=checked]:bg-white/30 data-[state=unchecked]:bg-black/10 data-[state=unchecked]:dark:bg-white/10 backdrop-blur-xl shadow-[inset_0_2px_5px_rgba(0,0,0,0.1)]",
    thumb: "pointer-events-none block h-6 w-6 rounded-full bg-white shadow-[0_2px_5px_rgba(0,0,0,0.2)] ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5"
  },
  checkbox: {
    root: "peer h-5 w-5 shrink-0 rounded-lg border border-white/50 bg-white/20 backdrop-blur-xl shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white/60 data-[state=checked]:text-dark",
    icon: "h-3.5 w-3.5"
  },
  slider: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-2 w-full grow overflow-hidden rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-xl border border-white/20",
    range: "absolute h-full bg-white/60 dark:bg-white/30 backdrop-blur-md",
    thumb: "block h-6 w-6 rounded-full border border-white/50 bg-white/80 backdrop-blur-2xl shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
  },
  tooltip: "z-50 overflow-hidden rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-3xl px-4 py-2 text-sm text-dark shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-white/40 dark:border-white/10 animate-in fade-in-0 zoom-in-95",
  badge: "inline-flex items-center rounded-full border border-white/40 bg-white/30 dark:bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-medium transition-colors text-dark shadow-[0_2px_10px_rgba(0,0,0,0.05)]",
  popover: "z-50 w-72 rounded-[2rem] bg-white/50 dark:bg-black/50 backdrop-blur-[40px] p-5 text-dark shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.1)] border border-white/40 dark:border-white/10 outline-none animate-in zoom-in-95",
  
  label: "text-sm font-medium text-gray-600 dark:text-gray-400 ml-1",
  radio: {
    root: "grid gap-3",
    item: "aspect-square h-5 w-5 rounded-full border border-white/50 bg-white/20 backdrop-blur-xl shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)] text-dark data-[state=checked]:bg-white/60 transition-all",
  },
  otp: {
    container: "flex items-center gap-3",
    slot: "relative flex h-14 w-12 items-center justify-center text-xl bg-white/20 dark:bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/30 shadow-[inset_0_2px_5px_rgba(0,0,0,0.05)] focus-visible:z-10 focus-visible:bg-white/40",
    slotActive: "z-10 bg-white/40 dark:bg-white/20 border-white/60 scale-105 transition-all",
    slotInactive: "",
  },
  toggle: {
    root: "inline-flex items-center justify-center rounded-2xl bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/30 data-[state=on]:bg-white/60 data-[state=on]:border-white/60 data-[state=on]:text-dark transition-all px-4 py-2"
  },
  toggleGroup: {
    root: "flex items-center justify-center gap-1 bg-black/5 dark:bg-white/5 p-1.5 rounded-full backdrop-blur-2xl w-fit border border-white/20",
    item: "inline-flex items-center justify-center rounded-full transition-all data-[state=on]:bg-white/60 dark:data-[state=on]:bg-white/20 data-[state=on]:text-dark hover:bg-white/30 h-9 px-4 text-sm font-medium"
  },
}

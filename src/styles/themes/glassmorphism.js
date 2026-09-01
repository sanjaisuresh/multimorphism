export const glassmorphismTheme = {
  layout: {
    app: "h-screen w-full flex flex-col md:flex-row overflow-hidden bg-glass-animated transition-all duration-700",
    sidebar: {
      container: "h-full flex-col bg-white/40 dark:bg-black/40 backdrop-blur-xl border-r border-white/40 dark:border-white/10 z-20 relative transition-all duration-300 shadow-[4px_0_24px_0_rgba(0,0,0,0.05)]",
      linkActive: "bg-white/60 dark:bg-white/20 shadow-sm text-primary font-bold rounded-xl border border-white/50 dark:border-white/10 backdrop-blur-md",
      linkInactive: "text-gray-600 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-white/10 hover:text-primary rounded-xl transition-all"
    },
    header: "h-16 flex flex-shrink-0 items-center justify-between px-6 bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] z-30 relative border-b border-white/50 dark:border-white/10 transition-colors duration-300",
    breadcrumb: "w-full bg-white/20 dark:bg-black/20 backdrop-blur-md border-b border-white/40 dark:border-white/10 flex items-center px-6 py-3 shadow-sm z-10 text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300"
  },
  dashboard: {
    statIcon: "rounded-2xl bg-white/50 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.05)]",
    badge: "rounded-full bg-white/60 dark:bg-white/20 backdrop-blur-md border border-white/50 shadow-sm",
    taskCircle: "w-3 h-3 rounded-full border border-white/50 shadow-sm",
    tabContainer: "flex bg-white/30 dark:bg-black/30 backdrop-blur-md p-1 rounded-2xl border border-white/40 dark:border-white/10 shadow-inner",
    tabActive: "bg-white/70 dark:bg-white/20 shadow-sm text-primary rounded-xl backdrop-blur-md",
    tabInactive: "text-gray-600 dark:text-gray-400 hover:text-primary hover:bg-white/20 dark:hover:bg-white/10 rounded-xl",
    txIcon: "w-10 h-10 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/10 flex items-center justify-center text-primary shadow-sm",
    txRow: "border-b border-white/30 dark:border-white/10 last:border-0 hover:bg-white/30 dark:hover:bg-white/10 transition-colors rounded-lg",
    incomeItem: "flex flex-col bg-white/40 dark:bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/50 dark:border-white/10 shadow-sm"
  },
  profile: {
    avatarWrapper: "bg-white/40 dark:bg-black/40 backdrop-blur-xl rounded-full p-2 border border-white/50 dark:border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]",
    avatarInner: "bg-white/60 dark:bg-white/20 shadow-inner rounded-full",
    editBtn: "bg-white/50 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 shadow-sm hover:bg-white/70 hover:scale-105 rounded-xl",
    tabsList: "mb-6 bg-white/30 dark:bg-black/30 backdrop-blur-md shadow-inner p-1.5 rounded-2xl w-full justify-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border border-white/40 dark:border-white/10",
    socialLink: "bg-white/50 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-sm hover:bg-white/70 dark:hover:bg-white/20 hover:-translate-y-1 transition-all rounded-xl",
    connectionCount: "bg-white/60 dark:bg-white/20 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-sm rounded-lg",
    connectionItem: "bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-sm hover:bg-white/60 dark:hover:bg-white/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 rounded-2xl",
    projectIcon: "bg-white/50 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-sm rounded-xl text-primary",
    progressTrack: "bg-white/30 dark:bg-white/10 shadow-inner rounded-full overflow-hidden border border-white/20",
    avatarBorder: "border-white/50 dark:border-white/20",
    newProjectCard: "border-dashed border-white/60 dark:border-white/20 bg-white/20 dark:bg-black/20 backdrop-blur-sm hover:bg-white/40 dark:hover:bg-white/10 hover:shadow-lg hover:border-white/80 transition-all rounded-2xl min-h-[280px]"
  },
  settings: {
    btnActive: "bg-white/70 dark:bg-white/20 rounded-2xl shadow-sm text-primary border-2 border-primary backdrop-blur-lg",
    btnInactive: "bg-white/30 dark:bg-black/30 rounded-2xl shadow-sm text-gray-500 hover:text-primary hover:bg-white/50 dark:hover:bg-white/10 backdrop-blur-md border border-white/40 dark:border-white/10",
    colorActive: "border-2 border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.5)]",
    colorInactive: "border border-white/50 shadow-sm hover:scale-110",
    switchTrackActive: "bg-primary shadow-inner border border-primary-dark",
    switchTrackInactive: "bg-white/40 dark:bg-black/40 backdrop-blur-md shadow-inner border border-white/50 dark:border-white/10",
    fontActive: "rounded-2xl shadow-sm bg-white/70 dark:bg-white/20 text-primary font-bold border-2 border-primary backdrop-blur-lg px-4",
    fontInactive: "rounded-2xl shadow-sm bg-white/30 dark:bg-black/30 text-gray-600 font-medium hover:bg-white/50 dark:hover:bg-white/10 border border-white/40 dark:border-white/10 backdrop-blur-md px-4",
    sliderTrack: "bg-white/40 dark:bg-white/10 shadow-inner border border-white/30 rounded-full h-4 accent-primary"
  },
  avatar: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full shadow-sm border border-white/60 dark:border-white/20 bg-white/50 dark:bg-black/50 backdrop-blur-md",
    image: "aspect-square h-full w-full object-cover opacity-90",
    fallback: "flex h-full w-full items-center justify-center rounded-full bg-white/40 dark:bg-black/40 text-primary font-semibold text-sm backdrop-blur-sm"
  },
  tabs: {
    list: "inline-flex items-center justify-center rounded-2xl bg-white/30 dark:bg-black/30 p-1 text-gray-600 shadow-inner backdrop-blur-md border border-white/30 dark:border-white/10",
    trigger: "inline-flex items-center justify-center whitespace-nowrap rounded-xl px-3 py-1.5 text-sm font-medium transition-all data-[state=active]:bg-white/70 dark:data-[state=active]:bg-white/20 data-[state=active]:text-primary data-[state=active]:shadow-sm border border-transparent data-[state=active]:border-white/50 dark:data-[state=active]:border-white/10"
  },
  typography: {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-dark drop-shadow-sm",
    h2: "scroll-m-20 border-b border-white/40 dark:border-white/10 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-dark drop-shadow-sm",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight text-dark drop-shadow-sm",
    p: "leading-7 text-gray-700 dark:text-gray-300 drop-shadow-sm"
  },
  card: "bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]",
  button: {
    base: "py-2 px-4 text-sm font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md",
    primary: "bg-primary/90 text-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:bg-primary border border-white/20 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:-translate-y-0.5",
    secondary: "bg-white/50 dark:bg-white/10 text-dark border border-white/60 dark:border-white/20 shadow-sm hover:bg-white/70 dark:hover:bg-white/20 hover:shadow-md hover:-translate-y-0.5",
    outline: "bg-transparent text-primary border-2 border-primary/50 shadow-none hover:bg-primary/10 hover:border-primary"
  },
  input: "w-full bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-2xl border border-white/40 dark:border-white/10 outline-none focus:ring-2 focus:ring-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all",
  switch: {
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-white/40 dark:border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white/60 data-[state=unchecked]:bg-black/20 backdrop-blur-md shadow-inner",
    thumb: "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-sm ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
  },
  checkbox: {
    root: "peer h-5 w-5 shrink-0 rounded-md border border-white/40 dark:border-white/20 bg-white/20 dark:bg-black/20 backdrop-blur-md shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white/60 data-[state=checked]:text-black transition-all",
    icon: "h-4 w-4"
  },
  slider: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-2 w-full grow overflow-hidden rounded-full bg-black/20 dark:bg-white/20 backdrop-blur-sm shadow-inner",
    range: "absolute h-full bg-white/60 dark:bg-white/40",
    thumb: "block h-5 w-5 rounded-full border border-white/40 bg-white shadow-[0_2px_5px_rgba(0,0,0,0.2)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-110"
  },
  tooltip: "z-50 overflow-hidden rounded-xl bg-white/30 dark:bg-black/30 backdrop-blur-xl px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-100 border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] animate-in fade-in-0 zoom-in-95",
  badge: "inline-flex items-center rounded-full border border-white/40 dark:border-white/20 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white shadow-sm bg-white/30 dark:bg-black/30 backdrop-blur-md text-gray-800 dark:text-gray-100",
  popover: "z-50 w-72 rounded-2xl bg-white/30 dark:bg-black/30 backdrop-blur-xl p-4 text-gray-800 dark:text-gray-100 border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] outline-none animate-in zoom-in-95",

  label: "text-sm font-medium text-white/70",
  radio: {
      root: "grid gap-2",
      item: "aspect-square h-5 w-5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-white data-[state=checked]:bg-white/40 data-[state=checked]:border-white/60 transition-all",
    },
  otp: {
      container: "flex items-center gap-2",
      slot: "relative flex h-12 w-12 items-center justify-center text-lg border border-white/20 bg-white/10 backdrop-blur-md text-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-white/50",
      slotActive: "z-10 border-white/60 bg-white/30",
      slotInactive: "bg-white/10",
    },
  toggle: {
      root: "inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-white/20 data-[state=on]:bg-white/40 data-[state=on]:border-white/50 data-[state=on]:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all px-4 py-2"
    },
  toggleGroup: {
      root: "flex items-center justify-center gap-1 border border-white/20 bg-white/5 backdrop-blur-md p-1 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] w-fit",
      item: "inline-flex items-center justify-center rounded-xl text-white transition-all data-[state=on]:bg-white/30 data-[state=on]:border data-[state=on]:border-white/40 data-[state=on]:shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:bg-white/10 h-9 px-3"
    },
}

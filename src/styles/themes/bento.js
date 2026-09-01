export const bentoTheme = {
  layout: {
    app: "h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[#F2F2F7] dark:bg-[#000000] text-black dark:text-white transition-colors duration-500 font-sans tracking-tight",
    sidebar: {
      container: "h-full flex-col bg-transparent z-20 relative transition-all duration-300 border-none p-4",
      linkActive: "bg-white dark:bg-[#1C1C1E] text-black dark:text-white font-semibold rounded-2xl shadow-sm border border-black/5 dark:border-white/5",
      linkInactive: "text-gray-500 hover:text-black dark:hover:text-white rounded-2xl transition-all hover:bg-black/5 dark:hover:bg-white/5"
    },
    header: "h-16 flex flex-shrink-0 items-center justify-between px-6 bg-transparent z-30 relative transition-colors duration-500 border-none pt-4",
    breadcrumb: "w-full bg-transparent flex items-center px-6 py-3 z-10 text-sm font-medium text-gray-500 transition-colors duration-500"
  },
  dashboard: {
    statIcon: "rounded-2xl bg-[#F2F2F7] dark:bg-[#1C1C1E] text-primary p-3",
    badge: "rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold",
    taskCircle: "w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20",
    tabContainer: "flex bg-[#F2F2F7] dark:bg-[#1C1C1E] p-1 rounded-2xl border border-black/5 dark:border-white/5",
    tabActive: "bg-white dark:bg-[#2C2C2E] text-black dark:text-white rounded-xl shadow-sm font-medium",
    tabInactive: "text-gray-500 hover:text-black dark:hover:text-white rounded-xl",
    txIcon: "w-10 h-10 rounded-2xl bg-[#F2F2F7] dark:bg-[#1C1C1E] flex items-center justify-center text-primary",
    txRow: "border-b border-black/5 dark:border-white/5 last:border-0 hover:bg-black/5 dark:hover:bg-white/5 transition-all rounded-2xl",
    incomeItem: "flex flex-col p-4 bg-[#F2F2F7] dark:bg-[#1C1C1E] rounded-2xl text-black dark:text-white transition-all hover:scale-[1.02]"
  },
  profile: {
    avatarWrapper: "bg-white dark:bg-[#1C1C1E] rounded-full p-1 shadow-sm",
    avatarInner: "border-0 rounded-full",
    editBtn: "bg-primary text-white hover:bg-primary-dark rounded-full transition-all font-medium px-6 shadow-sm",
    tabsList: "mb-6 bg-transparent w-full justify-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-b border-black/10 dark:border-white/10 rounded-none",
    socialLink: "bg-[#F2F2F7] dark:bg-[#1C1C1E] rounded-2xl text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all",
    connectionCount: "bg-primary text-white rounded-full font-medium px-3",
    connectionItem: "bg-[#F2F2F7] dark:bg-[#1C1C1E] rounded-2xl p-4 hover:scale-[1.02] transition-all duration-300",
    projectIcon: "bg-white dark:bg-[#2C2C2E] rounded-2xl text-primary p-2 shadow-sm",
    progressTrack: "bg-black/5 dark:bg-white/10 rounded-full overflow-hidden",
    avatarBorder: "border-transparent",
    newProjectCard: "border-2 border-dashed border-black/10 dark:border-white/10 bg-transparent rounded-3xl min-h-[280px] hover:border-primary hover:bg-primary/5 text-gray-500 transition-all cursor-pointer flex flex-col items-center justify-center font-medium"
  },
  settings: {
    btnActive: "bg-white dark:bg-[#2C2C2E] text-primary shadow-sm rounded-2xl font-semibold border border-black/5 dark:border-white/5",
    btnInactive: "bg-transparent text-gray-500 hover:bg-black/5 dark:hover:bg-white/5 rounded-2xl font-medium",
    colorActive: "ring-4 ring-primary ring-offset-2 ring-offset-[#F2F2F7] dark:ring-offset-[#000000] scale-110",
    colorInactive: "hover:scale-110 transition-transform",
    switchTrackActive: "bg-primary rounded-full",
    switchTrackInactive: "bg-gray-300 dark:bg-gray-700 rounded-full",
    fontActive: "bg-primary/10 text-primary font-semibold rounded-2xl px-4",
    fontInactive: "bg-transparent text-gray-500 font-medium hover:bg-black/5 dark:hover:bg-white/5 rounded-2xl px-4",
    sliderTrack: "bg-black/10 dark:bg-white/20 rounded-full h-2 accent-primary"
  },
  avatar: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden bg-[#F2F2F7] dark:bg-[#1C1C1E] rounded-full",
    image: "aspect-square h-full w-full object-cover",
    fallback: "flex h-full w-full items-center justify-center bg-[#F2F2F7] dark:bg-[#1C1C1E] text-black dark:text-white font-medium text-sm"
  },
  tabs: {
    list: "inline-flex items-center justify-center bg-[#F2F2F7] dark:bg-[#1C1C1E] p-1 rounded-2xl border border-black/5 dark:border-white/5",
    trigger: "inline-flex items-center justify-center whitespace-nowrap px-4 py-1.5 text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-[#2C2C2E] data-[state=active]:text-black dark:data-[state=active]:text-white data-[state=active]:shadow-sm rounded-xl"
  },
  typography: {
    h1: "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-black dark:text-white",
    h2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-black dark:text-white",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight text-black dark:text-white",
    p: "leading-7 text-gray-600 dark:text-gray-300"
  },
  card: "bg-white dark:bg-[#1C1C1E] rounded-[2rem] shadow-sm border border-black/5 dark:border-white/5 p-6 transition-all duration-300 hover:shadow-md",
  button: {
    base: "py-2 px-4 text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 rounded-2xl",
    primary: "bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md hover:-translate-y-0.5",
    secondary: "bg-[#F2F2F7] dark:bg-[#2C2C2E] text-black dark:text-white hover:bg-gray-200 dark:hover:bg-[#3C3C3E]",
    outline: "bg-transparent text-black dark:text-white border-2 border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20"
  },
  input: "w-full bg-[#F2F2F7] dark:bg-[#1C1C1E] rounded-2xl border border-black/5 dark:border-white/5 outline-none focus:ring-2 focus:ring-primary shadow-sm text-black dark:text-white placeholder-gray-500 transition-all",
  switch: {
    root: "peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bgbase disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-[#E5E5EA] dark:data-[state=unchecked]:bg-[#3A3A3C] shadow-sm",
    thumb: "pointer-events-none block h-6 w-6 rounded-full bg-white shadow-sm ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
  },
  checkbox: {
    root: "peer h-6 w-6 shrink-0 rounded-[0.5rem] border border-black/10 dark:border-white/10 bg-[#F2F2F7] dark:bg-[#1C1C1E] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:border-primary transition-all",
    icon: "h-4 w-4"
  },
  slider: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-2 w-full grow overflow-hidden rounded-full bg-[#E5E5EA] dark:bg-[#3A3A3C]",
    range: "absolute h-full bg-primary",
    thumb: "block h-6 w-6 rounded-full border border-black/5 dark:border-white/5 bg-white shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105"
  },
  tooltip: "z-50 overflow-hidden rounded-2xl bg-white dark:bg-[#1C1C1E] px-4 py-2 text-sm font-semibold text-black dark:text-white border border-black/5 dark:border-white/5 shadow-md animate-in fade-in-0 zoom-in-95",
  badge: "inline-flex items-center rounded-full border border-black/5 dark:border-white/5 px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary shadow-sm bg-white dark:bg-[#1C1C1E] text-black dark:text-white",
  popover: "z-50 w-72 rounded-[2rem] bg-white dark:bg-[#1C1C1E] p-5 text-black dark:text-white border border-black/5 dark:border-white/5 shadow-lg outline-none animate-in zoom-in-95",

  label: "text-sm font-semibold text-gray-500 dark:text-gray-400",
  radio: {
      root: "grid gap-2",
      item: "aspect-square h-5 w-5 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-primary data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white transition-all",
    },
  otp: {
      container: "flex items-center gap-2",
      slot: "relative flex h-12 w-12 items-center justify-center text-lg font-medium border-2 border-transparent bg-gray-100 dark:bg-gray-800 rounded-2xl text-gray-900 dark:text-white focus-visible:z-10 focus-visible:border-primary",
      slotActive: "z-10 border-primary bg-primary/5",
      slotInactive: "bg-gray-100 dark:bg-gray-800",
    },
  toggle: {
      root: "inline-flex items-center justify-center rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-black/5 dark:border-white/5 font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 data-[state=on]:bg-primary data-[state=on]:text-white transition-all px-4 py-2"
    },
  toggleGroup: {
      root: "flex items-center justify-center gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-2xl w-fit",
      item: "inline-flex items-center justify-center rounded-xl font-semibold bg-transparent text-gray-600 dark:text-gray-400 transition-all data-[state=on]:bg-white dark:data-[state=on]:bg-gray-700 data-[state=on]:text-gray-900 dark:data-[state=on]:text-white data-[state=on]:shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 h-9 px-3"
    },
}

export const materialTheme = {
  layout: {
    app: "h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[#FDFDF5] dark:bg-[#1C1C17] text-[#1C1C17] dark:text-[#E6E2D9] transition-colors duration-500 font-sans tracking-wide",
    sidebar: {
      container: "h-full flex-col bg-[#F3F4E9] dark:bg-[#2F3127] z-20 relative transition-all duration-300 border-none rounded-r-3xl my-2 ml-2 shadow-sm",
      linkActive: "bg-primary/20 text-primary-dark dark:text-primary-lighter font-medium rounded-full shadow-none mx-2 px-4 py-3",
      linkInactive: "text-[#45483D] dark:text-[#C8C7B7] hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all mx-2 px-4 py-3"
    },
    header: "h-16 flex flex-shrink-0 items-center justify-between px-6 bg-transparent z-30 relative transition-colors duration-500 border-none",
    breadcrumb: "w-full bg-transparent flex items-center px-6 py-3 z-10 text-sm font-medium text-[#45483D] dark:text-[#C8C7B7] transition-colors duration-500"
  },
  dashboard: {
    statIcon: "rounded-full bg-primary/20 text-primary-dark dark:text-primary-lighter p-4",
    badge: "rounded-full bg-primary text-white px-3 py-1 text-xs font-medium tracking-wide",
    taskCircle: "w-4 h-4 rounded-full bg-primary ring-2 ring-transparent",
    tabContainer: "flex bg-transparent p-0 border-b border-black/10 dark:border-white/10 rounded-none w-full",
    tabActive: "bg-transparent text-primary-dark dark:text-primary-lighter rounded-none shadow-none font-medium border-b-2 border-primary pb-2",
    tabInactive: "text-[#45483D] dark:text-[#C8C7B7] hover:bg-black/5 dark:hover:bg-white/5 rounded-t-lg pb-2",
    txIcon: "w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark dark:text-primary-lighter",
    txRow: "border-b border-black/5 dark:border-white/5 last:border-0 hover:bg-black/5 dark:hover:bg-white/5 transition-all rounded-none px-4",
    incomeItem: "flex flex-col p-4 bg-[#F3F4E9] dark:bg-[#2F3127] rounded-[1.75rem] text-[#1C1C17] dark:text-[#E6E2D9] transition-all hover:bg-[#E8E9DB] dark:hover:bg-[#3F4135]"
  },
  profile: {
    avatarWrapper: "bg-[#F3F4E9] dark:bg-[#2F3127] rounded-full p-0 shadow-none",
    avatarInner: "border-0 rounded-full",
    editBtn: "bg-primary text-white hover:bg-primary-dark rounded-full transition-all font-medium px-6 py-2.5 shadow-sm hover:shadow-md",
    tabsList: "mb-6 bg-transparent w-full justify-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-b border-black/10 dark:border-white/10 rounded-none",
    socialLink: "bg-[#F3F4E9] dark:bg-[#2F3127] rounded-full text-[#45483D] dark:text-[#C8C7B7] hover:bg-primary/20 hover:text-primary-dark dark:hover:text-primary-lighter transition-all",
    connectionCount: "bg-primary/20 text-primary-dark dark:text-primary-lighter rounded-full font-medium px-3",
    connectionItem: "bg-[#F3F4E9] dark:bg-[#2F3127] rounded-[1.75rem] p-4 hover:shadow-sm transition-all duration-300",
    projectIcon: "bg-primary/20 rounded-full text-primary-dark dark:text-primary-lighter p-3 shadow-none",
    progressTrack: "bg-black/10 dark:bg-white/10 rounded-full overflow-hidden h-2",
    avatarBorder: "border-transparent",
    newProjectCard: "border-0 bg-[#F3F4E9] dark:bg-[#2F3127] rounded-[1.75rem] min-h-[280px] hover:bg-[#E8E9DB] dark:hover:bg-[#3F4135] text-[#45483D] dark:text-[#C8C7B7] transition-all cursor-pointer flex flex-col items-center justify-center font-medium shadow-sm hover:shadow-md"
  },
  settings: {
    btnActive: "bg-primary/20 text-primary-dark dark:text-primary-lighter shadow-none rounded-full font-medium",
    btnInactive: "bg-transparent text-[#45483D] dark:text-[#C8C7B7] hover:bg-black/5 dark:hover:bg-white/5 rounded-full font-medium",
    colorActive: "ring-2 ring-primary ring-offset-2 ring-offset-[#FDFDF5] dark:ring-offset-[#1C1C17] scale-110",
    colorInactive: "hover:scale-110 transition-transform",
    switchTrackActive: "bg-primary rounded-full",
    switchTrackInactive: "bg-black/20 dark:bg-white/20 rounded-full border-2 border-transparent",
    fontActive: "bg-primary/20 text-primary-dark dark:text-primary-lighter font-medium rounded-full px-4",
    fontInactive: "bg-transparent text-[#45483D] dark:text-[#C8C7B7] font-medium hover:bg-black/5 dark:hover:bg-white/5 rounded-full px-4",
    sliderTrack: "bg-black/10 dark:bg-white/20 rounded-full h-1.5 accent-primary"
  },
  avatar: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden bg-[#F3F4E9] dark:bg-[#2F3127] rounded-full",
    image: "aspect-square h-full w-full object-cover",
    fallback: "flex h-full w-full items-center justify-center bg-[#F3F4E9] dark:bg-[#2F3127] text-primary-dark dark:text-primary-lighter font-medium text-sm"
  },
  tabs: {
    list: "inline-flex items-center justify-center bg-transparent p-0 rounded-none w-full justify-start border-b border-black/10 dark:border-white/10",
    trigger: "inline-flex items-center justify-center whitespace-nowrap px-4 py-2.5 text-sm font-medium transition-all data-[state=active]:bg-transparent data-[state=active]:text-primary-dark dark:data-[state=active]:text-primary-lighter data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
  },
  typography: {
    h1: "scroll-m-20 text-4xl font-normal tracking-tight lg:text-5xl text-[#1C1C17] dark:text-[#E6E2D9]",
    h2: "scroll-m-20 pb-2 text-3xl font-normal tracking-tight text-[#1C1C17] dark:text-[#E6E2D9]",
    h3: "scroll-m-20 text-2xl font-medium tracking-tight text-[#1C1C17] dark:text-[#E6E2D9]",
    p: "leading-7 text-[#45483D] dark:text-[#C8C7B7]"
  },
  card: "bg-[#FDFDF5] dark:bg-[#1C1C17] rounded-[1.75rem] shadow-sm border border-[#E8E9DB] dark:border-[#3F4135] p-6 transition-all duration-300 hover:shadow-md",
  button: {
    base: "py-2.5 px-5 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 rounded-full",
    primary: "bg-primary text-white hover:shadow-md hover:bg-primary-dark",
    secondary: "bg-primary/20 text-primary-dark dark:text-primary-lighter hover:bg-primary/30",
    outline: "bg-transparent text-primary-dark dark:text-primary-lighter border border-[#76786A] dark:border-[#909281] hover:bg-primary/10"
  },
  input: "w-full bg-[#E1E3D3] dark:bg-[#45473A] rounded-t-lg rounded-b-none border-b-2 border-[#76786A] dark:border-[#909281] outline-none focus:ring-0 focus:border-primary shadow-none text-[#1C1C17] dark:text-[#E6E2D9] placeholder-[#45473A] dark:placeholder-[#C5C7B6] px-4 py-3 transition-colors",
  switch: {
    root: "peer inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-[#E1E3D3] dark:data-[state=unchecked]:bg-[#45473A]",
    thumb: "pointer-events-none block h-6 w-6 rounded-full bg-white dark:bg-[#1C1C17] shadow-sm ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 data-[state=checked]:w-6 data-[state=unchecked]:w-4 data-[state=unchecked]:translate-x-1"
  },
  checkbox: {
    root: "peer h-6 w-6 shrink-0 rounded-sm border-2 border-[#76786A] dark:border-[#909281] bg-transparent focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-[#1C1C17] transition-all",
    icon: "h-5 w-5"
  },
  slider: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-4 w-full grow overflow-hidden rounded-full bg-[#E1E3D3] dark:bg-[#45473A]",
    range: "absolute h-full bg-primary",
    thumb: "block h-1 w-1 rounded-full border-[10px] border-primary bg-primary shadow-[0_0_0_10px_rgba(var(--primary-rgb),0.1)] transition-colors focus-visible:outline-none hover:shadow-[0_0_0_15px_rgba(var(--primary-rgb),0.2)] disabled:pointer-events-none disabled:opacity-50"
  },
  tooltip: "z-50 overflow-hidden rounded-md bg-[#45473A] dark:bg-[#E1E3D3] px-3 py-1.5 text-xs font-medium text-white dark:text-black shadow-md border-none animate-in fade-in-0 zoom-in-95",
  badge: "inline-flex items-center rounded-full border-none px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-0 bg-primary/20 text-[#1C1C17] dark:text-[#E6E2D9]",
  popover: "z-50 w-72 rounded-3xl bg-[#F3F4E9] dark:bg-[#2F3127] p-6 text-[#1C1C17] dark:text-[#E6E2D9] shadow-md border-none outline-none animate-in zoom-in-95",

  label: "text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wide",
  radio: {
      root: "grid gap-2",
      item: "aspect-square h-5 w-5 rounded-full border-2 border-gray-400 dark:border-gray-500 bg-transparent text-primary data-[state=checked]:border-primary data-[state=checked]:border-[6px] transition-all",
    },
  otp: {
      container: "flex items-center gap-2",
      slot: "relative flex h-12 w-10 items-center justify-center text-lg border-b-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 rounded-t-md text-gray-900 dark:text-white focus-visible:z-10 focus-visible:border-primary",
      slotActive: "z-10 border-primary bg-primary/5",
      slotInactive: "border-gray-300 dark:border-gray-600",
    },
  toggle: {
      root: "inline-flex items-center justify-center rounded-full bg-transparent border border-gray-300 dark:border-gray-600 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-[state=on]:bg-primary/10 data-[state=on]:text-primary data-[state=on]:border-transparent transition-all px-4 py-2"
    },
  toggleGroup: {
      root: "flex items-center justify-center bg-transparent border border-gray-300 dark:border-gray-600 rounded-full w-fit overflow-hidden",
      item: "inline-flex items-center justify-center font-medium bg-transparent text-gray-600 dark:text-gray-400 transition-all data-[state=on]:bg-primary/10 data-[state=on]:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 h-9 px-4 border-r border-gray-300 dark:border-gray-600 last:border-0 rounded-none"
    },
}

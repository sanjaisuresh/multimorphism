export const claymorphismTheme = {
  layout: {
    app: "h-screen w-full flex flex-col md:flex-row overflow-hidden bg-bgbase",
    sidebar: {
      container: "h-full flex-col bg-clay shadow-[4px_0_15px_rgba(0,0,0,0.03)] z-20 relative border-r border-gray-100 dark:border-white/5 transition-all duration-300",
      linkActive: "bg-bgbase shadow-inner text-primary font-semibold",
      linkInactive: "text-gray-500 hover:bg-bgbase/50 hover:text-dark"
    },
    header: "h-16 flex flex-shrink-0 items-center justify-between px-6 bg-clay shadow-[0_4px_15px_rgba(0,0,0,0.02)] z-30 relative border-b border-gray-100 dark:border-white/5 transition-colors duration-300",
    breadcrumb: "w-full bg-clay border-b border-gray-100 dark:border-white/5 flex items-center px-6 py-3 shadow-sm z-10 text-sm font-semibold text-gray-500 transition-colors duration-300"
  },
  dashboard: {
    statIcon: "rounded-xl shadow-clay-inner",
    badge: "rounded-full shadow-clay-inner",
    taskCircle: "w-3 h-3 rounded-full shadow-clay-inner",
    tabContainer: "flex bg-bgbase p-1 rounded-xl shadow-clay-inner",
    tabActive: "bg-clay shadow-clay-base text-primary",
    tabInactive: "text-gray-500 hover:text-dark",
    txIcon: "w-10 h-10 rounded-full bg-clay shadow-clay-btn flex items-center justify-center text-primary",
    txRow: "border-b border-gray-100 dark:border-white/5 last:border-0 hover:bg-bgbase/30 transition-colors",
    incomeItem: "flex flex-col bg-bgbase p-3 rounded-xl shadow-clay-inner"
  },
  profile: {
    avatarWrapper: "bg-clay shadow-clay-base",
    avatarInner: "bg-bgbase shadow-inner",
    editBtn: "shadow-clay-btn hover:scale-105",
    tabsList: "mb-6 bg-clay shadow-clay-inner p-1.5 rounded-2xl w-full justify-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border border-white/40",
    socialLink: "bg-clay shadow-clay-btn",
    connectionCount: "bg-clay shadow-clay-inner",
    connectionItem: "bg-bgbase shadow-clay-inner hover:bg-clay hover:shadow-clay-base",
    projectIcon: "shadow-clay-inner",
    progressTrack: "bg-bgbase shadow-inner",
    avatarBorder: "border-clay",
    newProjectCard: "border-dashed border-gray-300 dark:border-gray-700 hover:bg-clay hover:shadow-clay-base hover:border-transparent min-h-[280px]"
  },
  settings: {
    btnActive: "bg-clay rounded-xl shadow-clay-base text-primary ring-2 ring-primary",
    btnInactive: "bg-clay rounded-xl shadow-clay-base text-gray-400 hover:text-dark hover:shadow-clay-hover",
    colorActive: "ring-4 ring-white ring-offset-2 scale-110 shadow-clay-base",
    colorInactive: "shadow-clay-base hover:scale-110",
    switchTrackActive: "bg-primary shadow-inner",
    switchTrackInactive: "bg-gray-300 shadow-inner",
    fontActive: "rounded-xl shadow-clay-base bg-clay text-primary font-bold border-2 border-primary",
    fontInactive: "rounded-xl shadow-clay-base bg-bgbase text-gray-600 font-medium hover:bg-clay hover:shadow-clay-hover",
    sliderTrack: "bg-bgbase shadow-inner accent-primary"
  },
  avatar: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full shadow-clay-base border-2 border-white bg-bgbase",
    image: "aspect-square h-full w-full object-cover",
    fallback: "flex h-full w-full items-center justify-center rounded-full bg-bgbase text-primary font-semibold text-sm"
  },
  tabs: {
    list: "inline-flex items-center justify-center rounded-xl bg-gray-200 p-1 text-gray-500 shadow-inner",
    trigger: "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-all data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-clay-base"
  },
  typography: {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-dark",
    h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-dark",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight text-dark",
    p: "leading-7 text-gray-600 dark:text-gray-300"
  },
  card: "bg-clay rounded-clay shadow-clay-base p-6 transition-all duration-300 hover:shadow-clay-hover",
  button: {
    base: "py-2 px-4 text-sm font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2",
    primary: "bg-primary text-white shadow-clay-primary active:shadow-inner",
    secondary: "bg-clay text-dark shadow-clay-btn active:shadow-clay-active",
    outline: "bg-transparent text-primary border-2 border-primary shadow-none hover:bg-primary hover:text-white"
  },
  input: "w-full bg-bgbase rounded-xl border-2 border-white/50 dark:border-white/10 outline-none focus:ring-2 focus:ring-primary shadow-inner text-dark placeholder-gray-400 transition-all",
  switch: {
    root: "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bgbase disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-gray-200 data-[state=unchecked]:shadow-inner data-[state=checked]:shadow-clay-primary",
    thumb: "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-clay-base ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
  },
  checkbox: {
    root: "peer h-5 w-5 shrink-0 rounded-md border-2 border-primary bg-bgbase shadow-inner ring-offset-bgbase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:shadow-clay-primary",
    icon: "h-4 w-4"
  },
  slider: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-2 w-full grow overflow-hidden rounded-full bg-bgbase shadow-inner",
    range: "absolute h-full bg-primary",
    thumb: "block h-5 w-5 rounded-full border-2 border-primary bg-white shadow-clay-base ring-offset-bgbase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  },
  tooltip: "z-50 overflow-hidden rounded-xl bg-clay px-3 py-1.5 text-sm text-dark shadow-clay-base border-2 border-white/50 dark:border-white/10 animate-in fade-in-0 zoom-in-95",
  badge: "inline-flex items-center rounded-full border-2 border-white/50 dark:border-white/10 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-clay-inner bg-bgbase text-dark",
  popover: "z-50 w-72 rounded-xl bg-clay p-4 text-dark shadow-clay-base border-2 border-white/50 dark:border-white/10 outline-none animate-in zoom-in-95",

  label: "text-sm font-semibold text-gray-500 dark:text-gray-400",
  radio: {
      root: "grid gap-2",
      item: "aspect-square h-5 w-5 rounded-full border-2 border-white/50 bg-bgbase shadow-clay-inner text-primary data-[state=checked]:shadow-clay-primary transition-all",
    },
  otp: {
      container: "flex items-center gap-2",
      slot: "relative flex h-12 w-12 items-center justify-center text-lg shadow-clay-inner bg-bgbase rounded-xl m-1 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-primary",
      slotActive: "z-10 ring-2 ring-primary shadow-clay-base bg-white",
      slotInactive: "bg-bgbase shadow-clay-inner",
    },
  toggle: {
      root: "inline-flex items-center justify-center rounded-xl bg-bgbase shadow-clay-btn hover:shadow-clay-hover data-[state=on]:bg-primary data-[state=on]:text-white data-[state=on]:shadow-clay-primary transition-all px-3 py-2"
    },
  toggleGroup: {
      root: "flex items-center justify-center gap-1 bg-bgbase p-1 rounded-2xl shadow-clay-inner w-fit",
      item: "inline-flex items-center justify-center rounded-xl transition-all data-[state=on]:bg-white data-[state=on]:text-primary data-[state=on]:shadow-clay-base hover:bg-clay h-9 px-3"
    },
}

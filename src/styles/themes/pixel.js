export const pixelTheme = {
  layout: {
    app: "h-screen w-full flex flex-col md:flex-row overflow-hidden bg-white dark:bg-black font-mono",
    sidebar: {
      container: "h-full flex-col bg-white dark:bg-black z-20 relative border-r-4 border-black dark:border-white transition-all duration-300",
      linkActive: "bg-black dark:bg-white text-white dark:text-black font-bold uppercase",
      linkInactive: "text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 uppercase"
    },
    header: "h-16 flex flex-shrink-0 items-center justify-between px-6 bg-white dark:bg-black z-30 relative border-b-4 border-black dark:border-white transition-colors duration-300",
    breadcrumb: "w-full bg-white dark:bg-black border-b-4 border-black dark:border-white flex items-center px-6 py-3 z-10 text-xs font-bold uppercase text-black dark:text-white transition-colors duration-300"
  },
  dashboard: {
    statIcon: "rounded-none border-4 border-black dark:border-white",
    badge: "rounded-none border-2 border-black dark:border-white uppercase text-xs font-bold bg-white dark:bg-black text-black dark:text-white",
    taskCircle: "w-4 h-4 rounded-none bg-black dark:bg-white",
    tabContainer: "flex bg-white dark:bg-black p-1 border-4 border-black dark:border-white",
    tabActive: "bg-black dark:bg-white text-white dark:text-black uppercase font-bold",
    tabInactive: "text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 uppercase",
    txIcon: "w-10 h-10 rounded-none bg-white dark:bg-black border-4 border-black dark:border-white flex items-center justify-center text-black dark:text-white",
    txRow: "border-b-4 border-black dark:border-white last:border-0 hover:bg-gray-100 dark:hover:bg-gray-900 transition-none",
    incomeItem: "flex flex-col bg-white dark:bg-black p-3 border-4 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)]"
  },
  profile: {
    avatarWrapper: "bg-white dark:bg-black border-4 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)]",
    avatarInner: "bg-white dark:bg-black",
    editBtn: "bg-white dark:bg-black border-2 border-black dark:border-white text-black dark:text-white hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0_0_rgba(255,255,255,1)]",
    tabsList: "mb-6 bg-white dark:bg-black border-4 border-black dark:border-white p-1 w-full justify-start overflow-x-auto",
    socialLink: "bg-white dark:bg-black border-4 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
    connectionCount: "bg-white dark:bg-black border-2 border-black dark:border-white uppercase text-xs",
    connectionItem: "bg-white dark:bg-black border-4 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0_0_rgba(255,255,255,1)]",
    projectIcon: "bg-white dark:bg-black border-4 border-black dark:border-white text-black dark:text-white",
    progressTrack: "bg-white dark:bg-black border-2 border-black dark:border-white",
    avatarBorder: "border-2 border-black dark:border-white",
    newProjectCard: "border-4 border-dashed border-black dark:border-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900 uppercase font-bold text-center min-h-[280px]"
  },
  settings: {
    btnActive: "bg-black dark:bg-white text-white dark:text-black uppercase font-bold shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)]",
    btnInactive: "bg-white dark:bg-black border-4 border-black dark:border-white text-black dark:text-white uppercase font-bold hover:bg-gray-200 dark:hover:bg-gray-800",
    colorActive: "ring-4 ring-black dark:ring-white scale-110",
    colorInactive: "border-4 border-black dark:border-white hover:scale-110",
    switchTrackActive: "bg-black dark:bg-white border-4 border-black dark:border-white",
    switchTrackInactive: "bg-white dark:bg-black border-4 border-black dark:border-white",
    fontActive: "bg-black dark:bg-white text-white dark:text-black uppercase font-bold",
    fontInactive: "bg-white dark:bg-black border-4 border-black dark:border-white text-black dark:text-white uppercase font-bold hover:bg-gray-200 dark:hover:bg-gray-800",
    sliderTrack: "bg-white dark:bg-black border-4 border-black dark:border-white"
  },
  avatar: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden border-4 border-black dark:border-white bg-white dark:bg-black",
    image: "aspect-square h-full w-full object-cover [image-rendering:pixelated]",
    fallback: "flex h-full w-full items-center justify-center bg-white dark:bg-black text-black dark:text-white font-bold text-xs uppercase"
  },
  tabs: {
    list: "inline-flex items-center justify-center bg-white dark:bg-black border-4 border-black dark:border-white p-1",
    trigger: "inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-xs font-bold uppercase transition-none data-[state=active]:bg-black dark:data-[state=active]:bg-white data-[state=active]:text-white dark:data-[state=active]:text-black hover:bg-gray-200 dark:hover:bg-gray-800"
  },
  typography: {
    h1: "scroll-m-20 text-4xl font-black uppercase tracking-widest text-black dark:text-white",
    h2: "scroll-m-20 border-b-4 border-black dark:border-white pb-2 text-3xl font-black uppercase tracking-wider transition-colors first:mt-0 text-black dark:text-white",
    h3: "scroll-m-20 text-2xl font-bold uppercase tracking-widest text-black dark:text-white",
    p: "leading-relaxed text-black dark:text-white font-medium text-sm uppercase"
  },
  card: "bg-white dark:bg-black border-4 border-black dark:border-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] p-6 transition-none",
  button: {
    base: "py-3 px-6 text-xs font-bold uppercase transition-transform active:translate-y-1 active:translate-x-1 active:shadow-none flex items-center justify-center gap-2",
    primary: "bg-black dark:bg-white text-white dark:text-black border-4 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)]",
    secondary: "bg-white dark:bg-black text-black dark:text-white border-4 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)]",
    outline: "bg-transparent text-black dark:text-white border-4 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
  },
  input: "w-full bg-white dark:bg-black border-4 border-black dark:border-white outline-none focus:bg-gray-100 dark:focus:bg-gray-900 shadow-[inset_4px_4px_0_0_rgba(0,0,0,0.1)] text-black dark:text-white placeholder-gray-400 transition-none px-4 py-3 uppercase text-sm font-bold",
  switch: {
    root: "peer inline-flex h-8 w-14 shrink-0 cursor-pointer items-center border-4 border-black dark:border-white bg-white dark:bg-black transition-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-black dark:data-[state=checked]:bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)]",
    thumb: "pointer-events-none block h-5 w-5 bg-black dark:bg-white data-[state=checked]:bg-white dark:data-[state=checked]:bg-black ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1"
  },
  checkbox: {
    root: "peer h-6 w-6 shrink-0 border-4 border-black dark:border-white bg-white dark:bg-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] dark:shadow-[2px_2px_0_0_rgba(255,255,255,1)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-black dark:data-[state=checked]:bg-white data-[state=checked]:text-white dark:data-[state=checked]:text-black",
    icon: "h-4 w-4"
  },
  slider: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-4 w-full grow overflow-hidden border-4 border-black dark:border-white bg-white dark:bg-black shadow-[inset_2px_2px_0_0_rgba(0,0,0,1)] dark:shadow-[inset_2px_2px_0_0_rgba(255,255,255,1)]",
    range: "absolute h-full bg-black dark:bg-white",
    thumb: "block h-6 w-6 border-4 border-black dark:border-white bg-white dark:bg-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
  },
  tooltip: "z-50 overflow-hidden bg-white dark:bg-black px-4 py-2 text-xs font-bold uppercase text-black dark:text-white border-4 border-black dark:border-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] animate-none",
  badge: "inline-flex items-center border-4 border-black dark:border-white bg-white dark:bg-black px-3 py-1 text-xs font-bold uppercase text-black dark:text-white shadow-[2px_2px_0_0_rgba(0,0,0,1)] dark:shadow-[2px_2px_0_0_rgba(255,255,255,1)]",
  popover: "z-50 w-72 bg-white dark:bg-black p-5 text-black dark:text-white border-4 border-black dark:border-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] outline-none animate-none",
  
  label: "text-xs font-bold uppercase text-black dark:text-white",
  radio: {
    root: "grid gap-3",
    item: "aspect-square h-6 w-6 border-4 border-black dark:border-white bg-white dark:bg-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] dark:shadow-[2px_2px_0_0_rgba(255,255,255,1)] text-black dark:text-white data-[state=checked]:bg-black dark:data-[state=checked]:bg-white transition-none",
  },
  otp: {
    container: "flex items-center gap-3",
    slot: "relative flex h-14 w-12 items-center justify-center text-xl font-bold uppercase bg-white dark:bg-black border-4 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)]",
    slotActive: "z-10 bg-black dark:bg-white text-white dark:text-black shadow-none translate-x-1 translate-y-1",
    slotInactive: "",
  },
  toggle: {
    root: "inline-flex items-center justify-center bg-white dark:bg-black border-4 border-black dark:border-white hover:bg-gray-200 dark:hover:bg-gray-800 data-[state=on]:bg-black dark:data-[state=on]:bg-white data-[state=on]:text-white dark:data-[state=on]:text-black transition-none px-4 py-2 font-bold uppercase text-xs shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] active:translate-x-1 active:translate-y-1 active:shadow-none"
  },
  toggleGroup: {
    root: "flex items-center justify-center gap-1 bg-white dark:bg-black p-1 border-4 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] w-fit",
    item: "inline-flex items-center justify-center transition-none data-[state=on]:bg-black dark:data-[state=on]:bg-white data-[state=on]:text-white dark:data-[state=on]:text-black hover:bg-gray-200 dark:hover:bg-gray-800 h-10 px-4 text-xs font-bold uppercase"
  },
}

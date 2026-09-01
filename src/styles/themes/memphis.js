export const memphisTheme = {
  layout: {
    app: "h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[radial-gradient(#000000_2px,transparent_2px)] dark:bg-[radial-gradient(#ffffff_2px,transparent_2px)] bg-[size:20px_20px] bg-[#fdf5e6] dark:bg-[#1a1423] text-black dark:text-white transition-colors duration-500 font-sans font-black tracking-tight",
    sidebar: {
      container: "h-full flex-col bg-white dark:bg-[#2c2236] z-20 relative transition-all duration-300 border-r-4 border-black shadow-[6px_0_0_0_#000000]",
      linkActive: "bg-primary text-white font-black rounded-full border-4 border-black shadow-[4px_4px_0_0_#000000] translate-x-1 -translate-y-1",
      linkInactive: "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white rounded-full transition-all hover:bg-black/10 dark:hover:bg-white/10 hover:border-4 hover:border-black hover:shadow-[4px_4px_0_0_#000000] hover:translate-x-1 hover:-translate-y-1 border-4 border-transparent"
    },
    header: "h-16 flex flex-shrink-0 items-center justify-between px-6 bg-[#ff6b6b] dark:bg-[#845ec2] z-30 relative transition-colors duration-500 border-b-4 border-black shadow-[0_6px_0_0_#000000]",
    breadcrumb: "w-full bg-white dark:bg-[#2c2236] flex items-center px-6 py-3 z-10 text-sm font-black text-black dark:text-white transition-colors duration-500 border-b-4 border-black shadow-[0_4px_0_0_#000000] uppercase"
  },
  dashboard: {
    statIcon: "rounded-full bg-white dark:bg-[#2c2236] text-primary p-3 border-4 border-black shadow-[4px_4px_0_0_#000000]",
    badge: "rounded-full bg-[#fdf5e6] dark:bg-[#1a1423] text-black dark:text-white px-3 py-1 text-xs font-black border-4 border-black shadow-[3px_3px_0_0_#000000] uppercase",
    taskCircle: "w-5 h-5 rounded-none bg-primary border-4 border-black shadow-[3px_3px_0_0_#000000] transform rotate-12",
    tabContainer: "flex bg-white dark:bg-[#2c2236] p-2 rounded-full border-4 border-black shadow-[4px_4px_0_0_#000000]",
    tabActive: "bg-primary text-white rounded-full shadow-none font-black border-4 border-black translate-x-1 -translate-y-1 shadow-[3px_3px_0_0_#000000]",
    tabInactive: "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white rounded-full border-4 border-transparent",
    txIcon: "w-12 h-12 rounded-tl-[1.5rem] rounded-br-[1.5rem] bg-[#ff6b6b] dark:bg-[#845ec2] flex items-center justify-center text-white border-4 border-black shadow-[4px_4px_0_0_#000000]",
    txRow: "border-b-4 border-black last:border-0 hover:bg-[#fdf5e6] dark:hover:bg-[#1a1423] transition-all rounded-none px-4",
    incomeItem: "flex flex-col p-4 bg-[#fdf5e6] dark:bg-[#1a1423] rounded-tl-[2rem] rounded-br-[2rem] border-4 border-black text-black dark:text-white transition-all hover:-translate-y-2 hover:translate-x-2 hover:shadow-[8px_8px_0_0_#000000] shadow-[4px_4px_0_0_#000000]"
  },
  profile: {
    avatarWrapper: "bg-[#ff6b6b] dark:bg-[#845ec2] rounded-full p-2 border-4 border-black shadow-[6px_6px_0_0_#000000]",
    avatarInner: "border-4 border-white dark:border-black rounded-full",
    editBtn: "bg-primary text-white hover:bg-primary-dark rounded-full transition-all font-black px-6 border-4 border-black shadow-[4px_4px_0_0_#000000] hover:shadow-[6px_6px_0_0_#000000] hover:-translate-y-1 hover:translate-x-1 uppercase",
    tabsList: "mb-6 bg-white dark:bg-[#2c2236] p-2 rounded-full w-full justify-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-4 border-black shadow-[4px_4px_0_0_#000000]",
    socialLink: "bg-[#ff9f43] dark:bg-[#00c9a7] rounded-tl-[1.5rem] rounded-br-[1.5rem] text-black hover:bg-primary hover:text-white transition-all border-4 border-black shadow-[4px_4px_0_0_#000000] hover:-translate-y-1 hover:translate-x-1",
    connectionCount: "bg-black text-white rounded-full font-black px-3 py-1 shadow-[3px_3px_0_0_#ff6b6b]",
    connectionItem: "bg-white dark:bg-[#2c2236] rounded-tr-[2rem] rounded-bl-[2rem] p-4 border-4 border-black shadow-[4px_4px_0_0_#000000] hover:shadow-[6px_6px_0_0_#000000] hover:-translate-y-1 hover:translate-x-1 transition-all duration-300",
    projectIcon: "bg-primary rounded-full text-white p-3 border-4 border-black shadow-[4px_4px_0_0_#000000]",
    progressTrack: "bg-white dark:bg-[#2c2236] rounded-full overflow-hidden h-4 border-4 border-black shadow-[inset_3px_3px_0_0_rgba(0,0,0,0.2)]",
    avatarBorder: "border-transparent",
    newProjectCard: "border-4 border-dashed border-black bg-white dark:bg-[#2c2236] rounded-tr-[3rem] rounded-bl-[3rem] min-h-[280px] hover:bg-[#ff9f43] dark:hover:bg-[#00c9a7] text-black transition-all cursor-pointer flex flex-col items-center justify-center font-black uppercase hover:shadow-[8px_8px_0_0_#000000] hover:-translate-y-2 hover:translate-x-2"
  },
  settings: {
    btnActive: "bg-primary text-white font-black rounded-full border-4 border-black shadow-[4px_4px_0_0_#000000] -translate-y-1 translate-x-1 uppercase",
    btnInactive: "bg-white dark:bg-[#2c2236] text-black dark:text-white hover:bg-primary hover:text-white rounded-full font-black border-4 border-transparent hover:border-black hover:shadow-[4px_4px_0_0_#000000] hover:-translate-y-1 hover:translate-x-1 uppercase",
    colorActive: "ring-4 ring-black ring-offset-4 ring-offset-[#fdf5e6] dark:ring-offset-[#1a1423] scale-110 border-4 border-white",
    colorInactive: "border-4 border-black shadow-[3px_3px_0_0_#000000] hover:scale-110 transition-transform hover:shadow-[4px_4px_0_0_#000000]",
    switchTrackActive: "bg-primary border-4 border-black shadow-[inset_3px_3px_0_0_rgba(0,0,0,0.3)] rounded-full",
    switchTrackInactive: "bg-white dark:bg-[#2c2236] border-4 border-black shadow-[inset_3px_3px_0_0_rgba(0,0,0,0.3)] rounded-full",
    fontActive: "bg-black text-white font-black rounded-full px-4 py-1 shadow-[3px_3px_0_0_#ff6b6b]",
    fontInactive: "bg-white dark:bg-[#2c2236] text-black dark:text-white font-black border-4 border-black shadow-[3px_3px_0_0_#000000] hover:-translate-y-1 hover:translate-x-1 rounded-full px-4 py-1",
    sliderTrack: "bg-white dark:bg-[#2c2236] border-4 border-black rounded-full h-4 shadow-[4px_4px_0_0_#000000] accent-primary"
  },
  avatar: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden bg-white dark:bg-[#2c2236] border-4 border-black rounded-full shadow-[3px_3px_0_0_#000000]",
    image: "aspect-square h-full w-full object-cover",
    fallback: "flex h-full w-full items-center justify-center bg-[#ff9f43] dark:bg-[#00c9a7] text-black font-black text-sm uppercase"
  },
  tabs: {
    list: "inline-flex items-center justify-center bg-white dark:bg-[#2c2236] p-2 rounded-full border-4 border-black shadow-[4px_4px_0_0_#000000]",
    trigger: "inline-flex items-center justify-center whitespace-nowrap px-6 py-2 text-sm font-black transition-all data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-4 data-[state=active]:border-black data-[state=active]:shadow-[4px_4px_0_0_#000000] data-[state=active]:-translate-y-1 data-[state=active]:translate-x-1 rounded-full border-4 border-transparent uppercase"
  },
  typography: {
    h1: "scroll-m-20 text-4xl font-black tracking-tighter lg:text-5xl text-black dark:text-white uppercase drop-shadow-[4px_4px_0_rgba(0,0,0,0.2)]",
    h2: "scroll-m-20 pb-2 text-3xl font-black tracking-tighter text-black dark:text-white uppercase border-b-8 border-[#ff6b6b] dark:border-[#845ec2]",
    h3: "scroll-m-20 text-2xl font-black tracking-tighter text-black dark:text-white uppercase",
    p: "leading-7 text-gray-800 dark:text-gray-200 font-bold"
  },
  card: "bg-white dark:bg-[#2c2236] border-4 border-black shadow-[8px_8px_0_0_#000000] p-6 transition-all duration-300 hover:shadow-[12px_12px_0_0_#000000] hover:-translate-y-2 hover:translate-x-2 rounded-tl-[3rem] rounded-br-[3rem]",
  button: {
    base: "py-3 px-6 text-sm font-black transition-all duration-300 flex items-center justify-center gap-2 rounded-full border-4 border-black uppercase tracking-widest",
    primary: "bg-primary text-white shadow-[6px_6px_0_0_#000000] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[8px_8px_0_0_#000000] active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0_0_#000000]",
    secondary: "bg-[#ff9f43] dark:bg-[#00c9a7] text-black shadow-[6px_6px_0_0_#000000] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[8px_8px_0_0_#000000] active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0_0_#000000]",
    outline: "bg-white dark:bg-[#2c2236] text-black dark:text-white shadow-[6px_6px_0_0_#000000] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[8px_8px_0_0_#000000]"
  },
  input: "w-full bg-white rounded-none border-4 border-black outline-none focus:ring-4 focus:ring-primary shadow-[4px_4px_0_0_#000] text-black placeholder-gray-500 transition-all focus:-translate-y-1 focus:translate-x-1 focus:shadow-[6px_6px_0_0_#000]",
  switch: {
    root: "peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-4 border-black transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-[#f0f0f0] shadow-[2px_2px_0_0_#000]",
    thumb: "pointer-events-none block h-5 w-5 rounded-full bg-white border-2 border-black transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
  },
  checkbox: {
    root: "peer h-6 w-6 shrink-0 rounded-none border-4 border-black bg-white shadow-[4px_4px_0_0_#000] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-white hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0_0_#000] transition-all",
    icon: "h-4 w-4 stroke-[4px]"
  },
  slider: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-4 w-full grow overflow-hidden rounded-full border-4 border-black bg-white shadow-[2px_2px_0_0_#000]",
    range: "absolute h-full bg-primary",
    thumb: "block h-6 w-6 rounded-none border-4 border-black bg-primary shadow-[4px_4px_0_0_#000] transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0_0_#000]"
  },
  tooltip: "z-50 overflow-hidden rounded-tl-[1.5rem] rounded-br-[1.5rem] bg-white px-3 py-1.5 text-sm font-black text-black border-4 border-black shadow-[4px_4px_0_0_#000] animate-in fade-in-0 zoom-in-95 uppercase tracking-wider",
  badge: "inline-flex items-center rounded-tl-[1rem] rounded-br-[1rem] border-4 border-black px-2.5 py-0.5 text-xs font-black uppercase transition-colors focus:outline-none focus:ring-4 focus:ring-primary shadow-[2px_2px_0_0_#000] bg-primary text-white",
  popover: "z-50 w-72 rounded-tl-[2rem] rounded-br-[2rem] bg-white p-4 text-black border-4 border-black shadow-[8px_8px_0_0_#000] outline-none animate-in zoom-in-95",

  label: "text-sm font-black text-black uppercase tracking-widest bg-yellow-300 inline-block px-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
  radio: {
      root: "grid gap-2",
      item: "aspect-square h-6 w-6 rounded-full border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-pink-500 data-[state=checked]:bg-cyan-400 data-[state=checked]:text-black transition-all",
    },
  otp: {
      container: "flex items-center gap-3",
      slot: "relative flex h-14 w-12 items-center justify-center text-xl font-black border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black focus-visible:z-10 rounded-none",
      slotActive: "z-10 bg-pink-400 -translate-y-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
      slotInactive: "bg-white",
    },
  toggle: {
      root: "inline-flex items-center justify-center border-4 border-black bg-[#FF5E5E] text-black font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] data-[state=on]:bg-[#00E5FF] data-[state=on]:translate-y-[2px] data-[state=on]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all px-4 py-2 rounded-none"
    },
  toggleGroup: {
      root: "flex items-center justify-center gap-2 bg-[#F2C94C] p-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit rounded-none",
      item: "inline-flex items-center justify-center font-black uppercase bg-white border-4 border-black text-black transition-all data-[state=on]:bg-[#FF5E5E] data-[state=on]:text-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] data-[state=on]:translate-y-0 data-[state=on]:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] h-10 px-4 rounded-none"
    },
}

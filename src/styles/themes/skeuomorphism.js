export const skeuomorphismTheme = {
  layout: {
    app: "h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[#e6e6e6] dark:bg-[#1a1a1a] text-[#333333] dark:text-[#cccccc] transition-colors duration-500 font-sans shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]",
    sidebar: {
      container: "h-full flex-col bg-gradient-to-b from-[#f2f2f2] to-[#e6e6e6] dark:from-[#2a2a2a] dark:to-[#1a1a1a] z-20 relative transition-all duration-300 border-r border-[#ffffff] dark:border-[#333333] shadow-[5px_0_15px_rgba(0,0,0,0.2)]",
      linkActive: "bg-gradient-to-b from-primary-light to-primary text-white font-bold rounded-lg shadow-[inset_0_2px_5px_rgba(255,255,255,0.5),0_4px_6px_rgba(0,0,0,0.3)] border border-primary-dark",
      linkInactive: "text-[#555555] dark:text-[#aaaaaa] hover:text-[#222222] dark:hover:text-[#ffffff] rounded-lg transition-all hover:bg-gradient-to-b hover:from-[#ffffff] hover:to-[#f2f2f2] dark:hover:from-[#333333] dark:hover:to-[#2a2a2a] shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_3px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.5)] border border-[#d9d9d9] dark:border-[#111111]"
    },
    header: "h-16 flex flex-shrink-0 items-center justify-between px-6 bg-gradient-to-b from-[#f8f8f8] to-[#e6e6e6] dark:from-[#2f2f2f] dark:to-[#1a1a1a] z-30 relative transition-colors duration-500 border-b border-[#ffffff] dark:border-[#333333] shadow-[0_5px_15px_rgba(0,0,0,0.15)]",
    breadcrumb: "w-full bg-gradient-to-b from-[#e6e6e6] to-[#d9d9d9] dark:from-[#1a1a1a] dark:to-[#111111] flex items-center px-6 py-3 z-10 text-sm font-semibold text-[#666666] dark:text-[#999999] transition-colors duration-500 shadow-[inset_0_2px_5px_rgba(0,0,0,0.05)] border-b border-[#cccccc] dark:border-[#000000] uppercase text-shadow-[0_1px_0_rgba(255,255,255,0.8)] dark:text-shadow-[0_-1px_0_rgba(0,0,0,0.8)]"
  },
  dashboard: {
    statIcon: "rounded-xl bg-gradient-to-b from-[#ffffff] to-[#e6e6e6] dark:from-[#333333] dark:to-[#1a1a1a] text-primary p-3 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_6px_rgba(0,0,0,0.2)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_6px_rgba(0,0,0,0.6)] border border-[#cccccc] dark:border-[#111111]",
    badge: "rounded-md bg-gradient-to-b from-primary-light to-primary text-white px-3 py-1 text-xs font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_2px_4px_rgba(0,0,0,0.3)] border border-primary-dark",
    taskCircle: "w-4 h-4 rounded-full bg-gradient-to-br from-[#ffffff] to-primary shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_2px_4px_rgba(0,0,0,0.3)] border border-primary-dark",
    tabContainer: "flex bg-gradient-to-b from-[#d9d9d9] to-[#cccccc] dark:from-[#111111] dark:to-[#0a0a0a] p-1.5 rounded-xl border border-[#b3b3b3] dark:border-[#000000] shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)]",
    tabActive: "bg-gradient-to-b from-[#ffffff] to-[#f2f2f2] dark:from-[#333333] dark:to-[#2a2a2a] text-[#333333] dark:text-[#ffffff] rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_4px_rgba(0,0,0,0.5)] font-bold border border-[#cccccc] dark:border-[#111111]",
    tabInactive: "text-[#666666] dark:text-[#999999] hover:text-[#333333] dark:hover:text-[#cccccc] rounded-lg",
    txIcon: "w-12 h-12 rounded-xl bg-gradient-to-br from-[#ffffff] to-[#e6e6e6] dark:from-[#333333] dark:to-[#1a1a1a] flex items-center justify-center text-primary shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_6px_rgba(0,0,0,0.2)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_6px_rgba(0,0,0,0.6)] border border-[#cccccc] dark:border-[#111111]",
    txRow: "border-b border-[#cccccc] dark:border-[#111111] last:border-0 hover:bg-gradient-to-b hover:from-[#ffffff] hover:to-[#f2f2f2] dark:hover:from-[#2a2a2a] dark:hover:to-[#1a1a1a] transition-all rounded-xl px-4",
    incomeItem: "flex flex-col p-4 bg-gradient-to-b from-[#f2f2f2] to-[#e6e6e6] dark:from-[#2a2a2a] dark:to-[#1a1a1a] rounded-2xl border border-[#cccccc] dark:border-[#111111] text-[#333333] dark:text-[#cccccc] transition-all hover:scale-[1.02] shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_8px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_8px_rgba(0,0,0,0.5)]"
  },
  profile: {
    avatarWrapper: "bg-gradient-to-b from-[#d9d9d9] to-[#cccccc] dark:from-[#111111] dark:to-[#0a0a0a] rounded-full p-2 shadow-[inset_0_2px_5px_rgba(0,0,0,0.2),0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_2px_5px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.1)]",
    avatarInner: "border-4 border-[#ffffff] dark:border-[#333333] rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.3)]",
    editBtn: "bg-gradient-to-b from-primary-light to-primary text-white hover:from-primary hover:to-primary-dark rounded-xl transition-all font-bold px-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_6px_rgba(0,0,0,0.3)] border border-primary-dark active:shadow-[inset_0_4px_6px_rgba(0,0,0,0.4)] active:translate-y-0.5",
    tabsList: "mb-6 bg-gradient-to-b from-[#d9d9d9] to-[#cccccc] dark:from-[#111111] dark:to-[#0a0a0a] p-1.5 w-full justify-start overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border border-[#b3b3b3] dark:border-[#000000] shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)] rounded-xl",
    socialLink: "bg-gradient-to-b from-[#ffffff] to-[#e6e6e6] dark:from-[#333333] dark:to-[#1a1a1a] rounded-xl text-[#555555] dark:text-[#aaaaaa] hover:text-primary transition-all shadow-[inset_0_1px_0_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.5)] border border-[#cccccc] dark:border-[#111111]",
    connectionCount: "bg-gradient-to-b from-primary-light to-primary text-white rounded-md font-bold px-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_2px_4px_rgba(0,0,0,0.3)] border border-primary-dark",
    connectionItem: "bg-gradient-to-b from-[#f2f2f2] to-[#e6e6e6] dark:from-[#2a2a2a] dark:to-[#1a1a1a] rounded-2xl p-4 border border-[#cccccc] dark:border-[#111111] shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_8px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_6px_12px_rgba(0,0,0,0.2)] transition-all duration-300",
    projectIcon: "bg-gradient-to-br from-[#ffffff] to-[#e6e6e6] dark:from-[#333333] dark:to-[#1a1a1a] rounded-xl text-primary p-2 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_6px_rgba(0,0,0,0.2)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_6px_rgba(0,0,0,0.6)] border border-[#cccccc] dark:border-[#111111]",
    progressTrack: "bg-gradient-to-b from-[#cccccc] to-[#e6e6e6] dark:from-[#0a0a0a] dark:to-[#1a1a1a] rounded-full overflow-hidden h-3 shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)] border border-[#b3b3b3] dark:border-[#000000]",
    avatarBorder: "border-[#ffffff] dark:border-[#333333]",
    newProjectCard: "border-2 border-dashed border-[#b3b3b3] dark:border-[#333333] bg-[#e6e6e6]/50 dark:bg-[#1a1a1a]/50 rounded-2xl min-h-[280px] hover:bg-[#f2f2f2] dark:hover:bg-[#2a2a2a] text-[#888888] dark:text-[#666666] transition-all cursor-pointer flex flex-col items-center justify-center font-bold shadow-[inset_0_2px_5px_rgba(0,0,0,0.05)]"
  },
  settings: {
    btnActive: "bg-gradient-to-b from-primary-light to-primary text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_6px_rgba(0,0,0,0.3)] rounded-xl font-bold border border-primary-dark",
    btnInactive: "bg-gradient-to-b from-[#f2f2f2] to-[#e6e6e6] dark:from-[#2a2a2a] dark:to-[#1a1a1a] text-[#666666] dark:text-[#999999] hover:text-[#333333] dark:hover:text-[#ffffff] rounded-xl font-medium shadow-[inset_0_1px_0_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.5)] border border-[#cccccc] dark:border-[#111111]",
    colorActive: "ring-4 ring-[#e6e6e6] dark:ring-[#1a1a1a] ring-offset-2 ring-offset-transparent scale-110 shadow-[0_4px_10px_rgba(0,0,0,0.3)] border-2 border-[#ffffff]",
    colorInactive: "hover:scale-110 transition-transform shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_2px_4px_rgba(0,0,0,0.2)]",
    switchTrackActive: "bg-gradient-to-b from-primary-dark to-primary rounded-full shadow-[inset_0_2px_5px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.8)] border border-[#000000]",
    switchTrackInactive: "bg-gradient-to-b from-[#cccccc] to-[#e6e6e6] dark:from-[#0a0a0a] dark:to-[#1a1a1a] rounded-full shadow-[inset_0_2px_5px_rgba(0,0,0,0.3),0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_2px_5px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.1)] border border-[#999999] dark:border-[#000000]",
    fontActive: "bg-gradient-to-b from-[#ffffff] to-[#f2f2f2] dark:from-[#333333] dark:to-[#2a2a2a] text-[#333333] dark:text-[#ffffff] font-bold rounded-lg px-4 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_4px_rgba(0,0,0,0.5)] border border-[#cccccc] dark:border-[#111111]",
    fontInactive: "bg-transparent text-[#666666] dark:text-[#999999] font-medium rounded-lg px-4",
    sliderTrack: "bg-gradient-to-b from-[#cccccc] to-[#e6e6e6] dark:from-[#0a0a0a] dark:to-[#1a1a1a] rounded-full h-3 shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)] border border-[#b3b3b3] dark:border-[#000000] accent-primary"
  },
  avatar: {
    root: "relative flex h-10 w-10 shrink-0 overflow-hidden bg-gradient-to-b from-[#e6e6e6] to-[#cccccc] dark:from-[#1a1a1a] dark:to-[#111111] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.2)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_4px_rgba(0,0,0,0.6)] border border-[#b3b3b3] dark:border-[#000000]",
    image: "aspect-square h-full w-full object-cover",
    fallback: "flex h-full w-full items-center justify-center bg-transparent text-[#555555] dark:text-[#aaaaaa] font-bold text-sm text-shadow-[0_1px_0_rgba(255,255,255,0.8)] dark:text-shadow-[0_-1px_0_rgba(0,0,0,0.8)]"
  },
  tabs: {
    list: "inline-flex items-center justify-center bg-gradient-to-b from-[#d9d9d9] to-[#cccccc] dark:from-[#111111] dark:to-[#0a0a0a] p-1.5 rounded-xl border border-[#b3b3b3] dark:border-[#000000] shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)]",
    trigger: "inline-flex items-center justify-center whitespace-nowrap px-4 py-1.5 text-sm font-bold transition-all data-[state=active]:bg-gradient-to-b data-[state=active]:from-[#ffffff] data-[state=active]:to-[#f2f2f2] dark:data-[state=active]:from-[#333333] dark:data-[state=active]:to-[#2a2a2a] data-[state=active]:text-[#333333] dark:data-[state=active]:text-[#ffffff] data-[state=active]:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_2px_4px_rgba(0,0,0,0.1)] dark:data-[state=active]:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_4px_rgba(0,0,0,0.5)] data-[state=active]:border data-[state=active]:border-[#cccccc] dark:data-[state=active]:border-[#111111] rounded-lg"
  },
  typography: {
    h1: "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-[#333333] dark:text-[#cccccc] text-shadow-[0_2px_2px_rgba(255,255,255,0.8)] dark:text-shadow-[0_-1px_1px_rgba(0,0,0,0.8)]",
    h2: "scroll-m-20 pb-2 text-3xl font-bold tracking-tight text-[#444444] dark:text-[#bbbbbb] text-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:text-shadow-[0_-1px_1px_rgba(0,0,0,0.8)]",
    h3: "scroll-m-20 text-2xl font-bold tracking-tight text-[#555555] dark:text-[#aaaaaa]",
    p: "leading-7 text-[#666666] dark:text-[#999999] font-medium"
  },
  card: "bg-gradient-to-b from-[#f8f8f8] to-[#e6e6e6] dark:from-[#2f2f2f] dark:to-[#1a1a1a] rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,1),0_8px_15px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_15px_rgba(0,0,0,0.4)] border border-[#cccccc] dark:border-[#111111] p-6 transition-all duration-300",
  button: {
    base: "py-2 px-4 text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 rounded-xl active:translate-y-0.5 active:shadow-[inset_0_4px_6px_rgba(0,0,0,0.2)]",
    primary: "bg-gradient-to-b from-primary-light to-primary text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_6px_rgba(0,0,0,0.3)] hover:from-primary hover:to-primary-dark border border-primary-dark",
    secondary: "bg-gradient-to-b from-[#ffffff] to-[#e6e6e6] dark:from-[#333333] dark:to-[#1a1a1a] text-[#333333] dark:text-[#ffffff] shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_6px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_4px_6px_rgba(0,0,0,0.5)] border border-[#cccccc] dark:border-[#111111] hover:from-[#f2f2f2] hover:to-[#d9d9d9] dark:hover:from-[#2a2a2a] dark:hover:to-[#111111]",
    outline: "bg-transparent text-[#555555] dark:text-[#aaaaaa] border border-[#cccccc] dark:border-[#111111] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] hover:bg-[#e6e6e6] dark:hover:bg-[#1a1a1a]"
  },
  input: "w-full bg-gradient-to-b from-[#e6e6e6] to-[#f2f2f2] dark:from-[#1a1a1a] dark:to-[#222222] rounded-lg border border-[#b3b3b3] dark:border-[#000000] outline-none focus:ring-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_1px_0_rgba(255,255,255,1)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.1)] text-[#333333] dark:text-[#cccccc] placeholder-gray-500 transition-all focus:bg-white dark:focus:bg-[#333333]",
  switch: {
    root: "peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border border-[#b3b3b3] dark:border-[#000000] transition-colors focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gradient-to-b data-[state=checked]:from-green-500 data-[state=checked]:to-green-400 data-[state=unchecked]:bg-gradient-to-b data-[state=unchecked]:from-[#cccccc] data-[state=unchecked]:to-[#e6e6e6] dark:data-[state=unchecked]:from-[#111111] dark:data-[state=unchecked]:to-[#222222] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.1)]",
    thumb: "pointer-events-none block h-6 w-6 rounded-full bg-gradient-to-b from-[#ffffff] to-[#cccccc] dark:from-[#444444] dark:to-[#222222] border border-[#999999] dark:border-[#111111] shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.9)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_2px_0_rgba(255,255,255,0.2)] transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
  },
  checkbox: {
    root: "peer h-6 w-6 shrink-0 rounded-[4px] border border-[#b3b3b3] dark:border-[#000000] bg-gradient-to-b from-[#e6e6e6] to-[#f2f2f2] dark:from-[#1a1a1a] dark:to-[#222222] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_1px_0_rgba(255,255,255,1)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.1)] focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gradient-to-b data-[state=checked]:from-blue-500 data-[state=checked]:to-blue-400 data-[state=checked]:text-white transition-all active:shadow-[inset_0_4px_4px_rgba(0,0,0,0.2)]",
    icon: "h-4 w-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
  },
  slider: {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-3 w-full grow overflow-hidden rounded-full bg-gradient-to-b from-[#cccccc] to-[#e6e6e6] dark:from-[#111111] dark:to-[#222222] border border-[#b3b3b3] dark:border-[#000000] shadow-[inset_0_1px_3px_rgba(0,0,0,0.2),0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_3px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.1)]",
    range: "absolute h-full bg-gradient-to-b from-blue-500 to-blue-400",
    thumb: "block h-6 w-6 rounded-full bg-gradient-to-b from-[#ffffff] to-[#cccccc] dark:from-[#444444] dark:to-[#222222] border border-[#999999] dark:border-[#111111] shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.9)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_2px_0_rgba(255,255,255,0.2)] transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.9)]"
  },
  tooltip: "z-50 overflow-hidden rounded-md bg-gradient-to-b from-[#ffffcc] to-[#ffeba1] dark:from-[#333300] dark:to-[#1a1a00] px-3 py-1.5 text-sm font-bold text-[#333333] dark:text-[#cccccc] border border-[#cc9900] shadow-[2px_4px_6px_rgba(0,0,0,0.2)] animate-in fade-in-0 zoom-in-95",
  badge: "inline-flex items-center rounded-full border border-[#cc0000] px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_1px_2px_rgba(0,0,0,0.2)] bg-gradient-to-b from-red-500 to-red-600 text-white text-shadow-[0_1px_1px_rgba(0,0,0,0.5)]",
  popover: "z-50 w-72 rounded-xl bg-gradient-to-b from-[#f2f2f2] to-[#d9d9d9] dark:from-[#333333] dark:to-[#1a1a1a] p-4 text-[#333333] dark:text-[#cccccc] border-2 border-[#b3b3b3] dark:border-[#000000] shadow-[inset_0_1px_0_rgba(255,255,255,1),0_8px_16px_rgba(0,0,0,0.2)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_16px_rgba(0,0,0,0.5)] outline-none animate-in zoom-in-95",

  label: "text-sm font-semibold text-[#555555] dark:text-[#aaaaaa] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]",
  radio: {
      root: "grid gap-2",
      item: "aspect-square h-5 w-5 rounded-full border border-[#999999] dark:border-[#444444] bg-gradient-to-b from-[#e6e6e6] to-[#cccccc] dark:from-[#2a2a2a] dark:to-[#1a1a1a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_1px_1px_rgba(255,255,255,0.1)] text-[#0BA5E9] data-[state=checked]:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] transition-all",
    },
  otp: {
      container: "flex items-center gap-2",
      slot: "relative flex h-12 w-12 items-center justify-center text-lg font-bold border border-[#999999] dark:border-[#444444] bg-[#e6e6e6] dark:bg-[#1a1a1a] rounded-lg shadow-[inset_0_3px_6px_rgba(0,0,0,0.2),0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[inset_0_3px_6px_rgba(0,0,0,0.6),0_1px_1px_rgba(255,255,255,0.1)] text-[#333333] dark:text-[#eeeeee] focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-[#0BA5E9]",
      slotActive: "z-10 bg-[#f2f2f2] dark:bg-[#222222]",
      slotInactive: "bg-[#e6e6e6] dark:bg-[#1a1a1a]",
    },
  toggle: {
      root: "inline-flex items-center justify-center rounded-lg border border-[#aaaaaa] dark:border-[#333333] bg-gradient-to-b from-[#ffffff] to-[#e6e6e6] dark:from-[#333333] dark:to-[#1a1a1a] shadow-[0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] font-bold text-[#444444] dark:text-[#cccccc] hover:from-[#f2f2f2] hover:to-[#cccccc] data-[state=on]:from-[#d9d9d9] data-[state=on]:to-[#bfbfbf] dark:data-[state=on]:from-[#111111] dark:data-[state=on]:to-[#0a0a0a] data-[state=on]:shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)] dark:data-[state=on]:shadow-[inset_0_2px_5px_rgba(0,0,0,0.5)] transition-all px-4 py-2"
    },
  toggleGroup: {
      root: "flex items-center justify-center gap-0 border border-[#999999] dark:border-[#333333] bg-gradient-to-b from-[#e6e6e6] to-[#cccccc] dark:from-[#2a2a2a] dark:to-[#1a1a1a] rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.1)] w-fit overflow-hidden",
      item: "inline-flex items-center justify-center font-bold text-[#555555] dark:text-[#aaaaaa] transition-all data-[state=on]:bg-gradient-to-b data-[state=on]:from-[#d9d9d9] data-[state=on]:to-[#bfbfbf] dark:data-[state=on]:from-[#111111] dark:data-[state=on]:to-[#0a0a0a] data-[state=on]:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] dark:data-[state=on]:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] hover:bg-[#f2f2f2] dark:hover:bg-[#333333] h-9 px-4 border-r border-[#999999] dark:border-[#333333] last:border-0 rounded-none"
    },
}

import React from 'react'

const Loading = () => {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
            {/* Background Glow Effects */}
            <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Main Loader Card */}
            <div className="relative z-10 flex w-[92%] max-w-lg flex-col items-center rounded-[2rem] border border-white/10 bg-white/5 px-8 py-12 shadow-2xl backdrop-blur-xl">
                {/* Animated Logo */}
                <div className="relative mb-8 flex items-center justify-center">
                    <div className="absolute h-28 w-28 animate-ping rounded-full bg-cyan-400/20" />
                    <div className="absolute h-24 w-24 animate-pulse rounded-full border border-cyan-400/30" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-purple-500 shadow-[0_0_40px_rgba(34,211,238,0.35)]">
                        <span className="text-3xl font-black tracking-widest">YV</span>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="mb-3 text-center text-4xl font-black tracking-tight">
                    Loading Your Experience
                </h1>

                <p className="mb-8 max-w-md text-center text-sm leading-relaxed text-zinc-300">
                    Preparing animations, syncing user session, and loading optimized resources for a smooth experience.
                </p>

                {/* Loading Bar */}
                <div className="mb-4 w-full overflow-hidden rounded-full bg-white/10 p-[3px]">
                    <div className="h-3 w-full overflow-hidden rounded-full bg-black/40">
                        <div className="h-full w-1/2 animate-[loading_2s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
                    </div>
                </div>

                {/* Loading Text */}
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-blue-400 [animation-delay:0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-purple-400 [animation-delay:0.3s]" />
                    <span className="ml-2 tracking-wide">Please wait...</span>
                </div>

                {/* Bottom Stats */}
                <div className="mt-10 grid w-full grid-cols-3 gap-4 text-center">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                        <p className="text-xl font-bold">98%</p>
                        <p className="text-xs text-zinc-400">Assets Ready</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                        <p className="text-xl font-bold">24ms</p>
                        <p className="text-xs text-zinc-400">Latency</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                        <p className="text-xl font-bold">Secure</p>
                        <p className="text-xs text-zinc-400">Encrypted</p>
                    </div>
                </div>
            </div>

            {/* Custom Animation */}
            <style>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(20%);
          }
          100% {
            transform: translateX(220%);
          }
        }
      `}</style>
        </div>
    )
}

export default Loading
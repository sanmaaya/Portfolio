import AnoAI from "@/components/ui/animated-shader-background";

const ShaderDemo = () => {
    return (
        <div className="w-full h-screen bg-black relative">
            <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="text-4xl font-bold text-slate-900 font-bold glass-card p-10">Shader Background Demo</h2>
            </div>
            <AnoAI />
        </div>
    );
};

export { ShaderDemo as DemoOne };

export const FrostedPanel = (props: { children: React.ReactNode; className?: string; id?: string }) => {
  return (
    <div id={props.id} className={"bg-white/10 backdrop-blur border border-white/30 shadow-[0_0_10px_rgba(0,0,0,0.1)] p-4 md:p-10 m-10 rounded-xl flex flex-col" + props.className} >
      {props.children}
    </div>
  );
};

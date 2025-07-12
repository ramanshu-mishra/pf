// store/useMousePosition.ts
import { create } from 'zustand';

type Position = {
  x: number;
  y: number;
};

type MouseStore = {
  mousePosition: Position;
  updatePosition: (pos: Position) => void;
};

export const useMousePosition = create<MouseStore>((set) => ({
  mousePosition: { x: -100, y: -100 },
  updatePosition: (pos) => set({ mousePosition: pos }),
}));

// ___________________________________________________________________

type RelStore = {
    mousePosition: Position,
    updatePosition: (pos:Position)=>void
}

export const useRelMousePosition = create<RelStore>((set)=>({
    mousePosition: {x:50,y:50},
    updatePosition: (pos)=> set({mousePosition: pos})
}));


type ConnectStore = {
    conenctHover: boolean,
    setConnectHover: (x:boolean)=>void
}

type AboutHover={
    aboutHover: boolean,
    setAboutHover: (x:boolean)=>void
}

export const useConnectStore = create<ConnectStore>((set)=>({
    conenctHover: false,
    setConnectHover: (val)=>set({conenctHover:val})
}))


export const useAboutHover = create<AboutHover>((set)=>({
    aboutHover: false,
    setAboutHover: (val)=>set({aboutHover:val})
}));
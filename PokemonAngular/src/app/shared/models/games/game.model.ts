
export interface Game {
    name: string,
    url: string
}

export interface GameObjJson {
    count: string,
    next:string,
    previus: string,
    results: Game[]
}
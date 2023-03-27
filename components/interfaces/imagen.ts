export interface imagen {
    
    nombre: string,
    alt: string,
    slug: string,
    descripcion: string,
    imagenes: string,
    estatica: string,
    rows    : number,
    cols    : number,
    relacionados: Arelacionado[]
    
    
}

export interface Arelacionado {
    title:       string,
    rslug:       string,
    rimg:        string,
    id:          string,
    descripcion: string

}


export interface Iportadas {

    
    nombre: string,
    alt: string,
    slug: string,
    descripcion: string,
    imagenes: string,
    rows    : number,
    cols    : number,
    
    
}


/* INTERFACES PARA LA PAGINA DE ECOSISTEMA */

/* Interfaz para los datos de Peronsas con los mismos intereses */
export interface EnvPeople {
	title: string;
	items: ItemsPeople[];
}

interface ItemsPeople {
	name: string;
	description: string;
}

/* Interfaz para grupos y foros relacionados */
export interface EnvGroupForum {
	title: string;
	items: ItemsGroupForum[];
}

interface ItemsGroupForum {
	title: string;
	srcImg: string;
	alt: string;
	type: string;
}

/* Interfaz para Eventos y talleres relacionados */
export interface EnvEvents {
	title: string;
	items: ItemsEvents[];
}

interface ItemsEvents {
	title: string;
	description: string;
	srcInfo: string;
	srcImg: string;
	alt: string;
}

export interface PokeApiPokemonResponse {
  abilities: Ability[]
  base_experience: null | string
  cries: Cries
  forms: Species[]
  game_indices: []
  height: number
  held_items: []
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Move[]
  name: string
  order: number
  past_abilities: []
  past_types: []
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}

export interface Ability {
  ability: Species
  is_hidden: boolean
  slot: number
}

export interface Species {
  name: string
  url: string
}

export interface Cries {
  latest: string
  legacy: null | string
}

export interface Move {
  move: Species
  version_group_details: VersionGroupDetail[]
}

export interface VersionGroupDetail {
  level_learned_at: number
  move_learn_method: Species
  version_group: Species
}

export interface GenerationV {
  'black-white': Sprites
}

export interface GenerationIv {
  'diamond-pearl': Sprites
  'heartgold-soulsilver': Sprites
  platinum: Sprites
}

export interface Versions {
  'generation-i': GenerationI
  'generation-ii': GenerationIi
  'generation-iii': GenerationIii
  'generation-iv': GenerationIv
  'generation-v': GenerationV
  'generation-vi': { [key: string]: Home }
  'generation-vii': GenerationVii
  'generation-viii': GenerationViii
}

export interface Other {
  dream_world: DreamWorld
  home: Home
  'official-artwork': OfficialArtwork
  showdown: Sprites
}

export interface Sprites {
  back_default: null | string
  back_female: null | string
  back_shiny: null | string
  back_shiny_female: null | string
  front_default: null | string
  front_female: null | string
  front_shiny: null | string
  front_shiny_female: null | string
  other?: Other
  versions?: Versions
  animated?: Sprites
}

export interface GenerationI {
  'red-blue': RedBlue
  yellow: RedBlue
}

export interface RedBlue {
  back_default: null | string
  back_gray: null | string
  back_transparent: null | string
  front_default: null | string
  front_gray: null | string
  front_transparent: null | string
}

export interface GenerationIi {
  crystal: Crystal
  gold: Gold
  silver: Gold
}

export interface Crystal {
  back_default: null | string
  back_shiny: null | string
  back_shiny_transparent: null | string
  back_transparent: null | string
  front_default: null | string
  front_shiny: null | string
  front_shiny_transparent: null | string
  front_transparent: null | string
}

export interface Gold {
  back_default: null | string
  back_shiny: null | string
  front_default: null | string
  front_shiny: null | string
  front_transparent?: null | string
}

export interface GenerationIii {
  emerald: OfficialArtwork
  'firered-leafgreen': Gold
  'ruby-sapphire': Gold
}

export interface OfficialArtwork {
  front_default: null | string
  front_shiny: null | string
}

export interface Home {
  front_default: null | string
  front_female: null | string
  front_shiny: null | string
  front_shiny_female: null | string
}

export interface GenerationVii {
  icons: DreamWorld
  'ultra-sun-ultra-moon': Home
}

export interface DreamWorld {
  front_default: null | string
  front_female?: null | string
}

export interface GenerationViii {
  icons: DreamWorld
}

export interface Stat {
  base_stat: number
  effort: number
  stat: Species
}

export interface Type {
  slot: number
  type: Species
}

interface Version {
  name: string
  url: string
}

interface VersionDetail {
  rarity: number
  version: Version
}

interface Item {
  name: string
  url: string
}

export interface HeldItem {
  item: Item
  version_details: VersionDetail[]
}

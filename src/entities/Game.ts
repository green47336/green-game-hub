import { Platform } from "@/entities/Platform";

export interface Game {
  platforms: { platform: Platform }[];
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

import Platform from "@/entities/Platform";
import Genre from "./Genre";
import Publisher from "./Publisher";
import Developer from "./Developer";

export default interface Game {
  platforms: { platform: Platform }[];
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  developers: Developer[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

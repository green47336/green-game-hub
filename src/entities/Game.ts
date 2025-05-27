import Platform from "@/entities/Platform";
import Genre from "./Genre";
import Publisher from "./Publisher";
import Developer from "./Developer";
import Creator from "./Creator";
import ESRBRating from "./ESRBRating";

export default interface Game {
  platforms?: { platform: Platform }[];
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  developers: Developer[];
  creators: Creator[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  esrb_rating: ESRBRating;
}

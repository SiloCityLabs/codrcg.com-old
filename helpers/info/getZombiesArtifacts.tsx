import { getArtifactsList } from "@/helpers/generator/zombies/getArtifactsList";
import { Artifact } from "@/types/Generator";

export function getZombiesArtifacts(
  game: string = "all",
  value: string = ""
): Artifact | Record<string, Artifact> {
  const data = getArtifactsList(game) as Record<string, Artifact>;

  return data;
}

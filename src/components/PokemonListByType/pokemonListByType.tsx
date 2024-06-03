import { useParams } from "react-router";
import useGetPokemonListByType from "../../hooks/useGetPokemonListByType";
import { Grid } from "../shared/grid/Grid";
import React from "react";
import { PokemonCard } from "../PokemonCard/PokemonCard";

export const PokemonByTypeList = () => {
  const { typeName } = useParams();
  const { pokemonList } = useGetPokemonListByType(typeName ?? "");

  return (
    <Grid>
      {pokemonList?.map((pokemon) => (
        <PokemonCard key={pokemon?.pokemon.name} pokemon={pokemon?.pokemon} />
      ))}
    </Grid>
  );
};

import Loading from "@/components/Loading";
import SearchComp from "@/components/SearchComp";
import { Suspense } from "react";

const Search = () => {
  return (
    <Suspense fallback={<Loading />}>
      <SearchComp />
    </Suspense>
  );
};

export default Search;
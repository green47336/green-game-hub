import useGameQueryStore from "@/store";
import { Input } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <Input
        ref={ref}
        borderRadius={20}
        placeholder="Search..."
        variant="subtle"
      />
    </form>
  );
};

export default SearchInput;

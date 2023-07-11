import { Chat } from "@/entities/chat";
import { useObject } from "@/entities/object";
import { Container } from "@/shared/ui/Container";
import { Loader } from "@/shared/ui/Loader";

function App() {
	const { loading } = useObject();
	return <Container>{loading ? <Loader /> : <Chat />}</Container>;
}

export default App;

import { Container } from "@/shared/ui/Container";
import { Loader } from "@/shared/ui/Loader";

import { Chat } from "@/widgets/chat";

import { useObject } from "@/entities/object";

function App() {
	const { loading } = useObject();
	return <Container>{loading ? <Loader /> : <Chat />}</Container>;
}

export default App;

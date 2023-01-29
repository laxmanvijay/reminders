import { TopBar } from "@/components/TopBar/TopBar.component";

export default function About() {
    return (
        <>
        <TopBar />
        <p style={{'textAlign': 'center', 'fontSize': '20px'}}>
            This is a simple reminder website created by @LYRJ.
        </p>
        </>
    );
};
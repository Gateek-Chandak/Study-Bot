// COMPONENTS
import PageHeader from "./serverComponents/Header";
import SearchSection from "./clientComponents/Search";
import YoutubeDisplay from "./clientComponents/YoutubeDisplay";
import GoogleDisplay from "./clientComponents/GoogleLinkDisplay"

// PROVIDERS
import { YoutubeDataProvider } from "./contexts/YoutubeDataContext";
import { GoogleLinkProvider } from "./contexts/GoogleLinkDataContext";

// HOMEPAGE
const HomePage = () => {

    return (
        <GoogleLinkProvider>
            <YoutubeDataProvider>
                <div className="h-screen flex flex-col">
                    <PageHeader />
                    {/* <YoutubeDisplay /> */}
                    <GoogleDisplay />
                    <SearchSection />
                </div>
            </YoutubeDataProvider> 
        </GoogleLinkProvider>
    );
}
 
export default HomePage;
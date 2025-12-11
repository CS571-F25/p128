import { BookmarkButton } from "./BookmarksContext";
import { Image } from "react-bootstrap"
import "./Licenses.css"

export default function LicensesAndRules (props){
  return (
    <div className="rules-page">
        <section className="rules-hero">
            <img src="WIDNRLogo.webp" alt="Wisconsin DNR logo"className="rules-hero-logo"/>
            <div className="rules-hero-text">
            <h1 id="licenses-heading">Licenses & Rules</h1>
                <p>
                    This page gives an overview of freshwater fishing rules in Wisconsin.
                    The information here is summarized from the{" "}
                    <a href="https://dnr.wisconsin.gov/" target="_blank" rel="noreferrer">
                    Wisconsin DNR
                    </a>. Always check the official site for updated regulations.
                </p>
            </div>
        </section>

        {/* Getting Started */}
        <section className="rules-section">
            <div className="rules-section-heading">
                <h2 id="getting-started">Getting started</h2>
                <BookmarkButton id="rules-getting-started"
                    label="Getting started with a license"
                    to="/LicensesAndRules#getting-started"
                    size="sm"
                    className="rules-bookmark"
                />
            </div>
            <p>
                Everyone that wants to fish needs a license. Fishing licenses fund Wisconsin conservation and fisheries management. Revenue supports stocking programs, boat launches, fish surveys, habitat restoration,
                and youth programs. People under 16 years old don't need a fishing license, but still need to follow rules. If you are a first time buyer for a license, you can get a license at a reduced price.
                You can buy licenses online, at DNR service centers, or at many local bait shops. To buy a license online, you must: 
            </p>
            <ul className="rules-list">
                <li>
                    <a href="https://det.wi.gov/Pages/MyWisconsin_ID_Self_Registration.aspx" target="_blank" rel="noreferrer">Register</a> for a MyWisconsin ID to access the WI DNR's Water permit system to start an application
                </li>
                <li>
                    <a 
                    href="https://permits.dnr.wi.gov/_layouts/15/DNRLogin/DNR16Login.aspx?ReturnUrl=%2fwater%2f_layouts%2f15%2fAuthenticate.aspx%3fSource%3d%252Fwater%252FSitePages%252FPermits%252Easpx&Source=%2Fwater%2FSitePages%2FPermits%2Easpx" 
                    target="_blank"
                    rel="noreferrer"
                    >Begin</a> a application, sign and pay any fees online
                </li>
                <li>
                    <a href="https://dnr.wisconsin.gov/permits/water/notices.html" target="_blank" rel="noreferrer">View</a> licenses and make sure to remember this and keep it in a safe place!
                </li>
            </ul>
        </section>

        {/* License types */}
        <section className="rules-section">
            <div className="rules-section-heading">
                <h2 id="license-types">License types</h2>
                <BookmarkButton
                id="rules-license-types"
                label="License types overview"
                to="/LicensesAndRules#license-types"
                size="sm"
                className="rules-bookmark"
                />
            </div>
            <p>
                Wisconsins offers several license types that cater to what fish you want to catch and how long you plan to fish. There are resident and nonresident licenses and several options for different situations. 
                To check out the specifics of the licenses, <a href="https://dnr.wisconsin.gov/topic/Fishing/outreach/FishingLicenses" target="_blank" rel="noreferrer">Click here</a>
            </p>

            <h3>General Resident Fishing License</h3>
            <p>
                Covers most freshwater fishing on Wisconsin inland lakes and rivers. Allows anglers to target common species 
                like panfish, walleye, largemouth and smallmouth bass, northern pike, catfish, and many more
            </p>

            <h3>Resident Sturgeon Fishing License</h3>
            <p>
                Required in addition to a standard fishing license if you plan to fish for sturgeon. This license is <strong>seasonal</strong> and applies to specific waters.
                Sturgeon regulations are strict and heavily check size, dates, and mandatory harvest registration.
            </p>

            <div className="rules-license-row rules-license-row--reverse">
                <div className="rules-license-text">
                    <h3>Great Lakes Salmon/Trout stamp</h3>
                    <p>
                        Required if you plan to fish Lake Michigan, Green Bay, or Lake Superior for salmon or trout. This stamp is added to your base fishing license. Covers species like 
                        chinook salmon, coho, steelhead, and brown trout.
                    </p>
                </div>
            <img src="TroutStamp.png" alt="Wisconsin inland trout stamp" className="rules-image-side"/>
            </div>

            <div className="rules-license-row">
                <div className="rules-license-text">
                    <h3>Inland Trout Stamp</h3>
                    <p>
                        Needed if you plan to fish for trout in inland streams or inland lakes.
                        Trout waters are classified in 3 groups with 1 being high amounts of
                        trout and 3 being low. Certain streams or lakes are regulated more
                        strictly to prevent overfishing in these areas.
                    </p>
                </div>
            <img src="TroutInland.png" alt="Wisconsin inland trout stamp" className="rules-image-side"/>
            </div>
            
            <h3>Youth Licenses</h3>
            <p>Children under 16 generally don't need a fishing license in Wisconsin, but the state offers optional youth licenses that help support conservation programs and gives access to additional 
                opportunities like youth sturgeon spearing. Even without a license, young anglers must follow all fishing rules.</p>
            <h3>Other Licenses</h3>
            <p>Other licenses cover the special situations in the fishing system. This includes discounted or modified licenses for disabled residents, veterans, and senior anglers as well 
                as short term licenses. Wisconsin also offers a Conservation Patron License, which bundles most major hunting and fishing licenses into one single purchase. Anglers
                can also buy a one day or short term licenses which are cheaper and gererally are for the day. </p>
        </section>

        {/* Seasons */}
        <section className="rules-section">
            <div className="rules-section-heading">
                <h2 id="seasons">Seasons</h2>
                <BookmarkButton
                    id="rules-seasons"
                    label="Season overview"
                    to="/LicensesAndRules#seasons"
                    size="sm"
                    className="rules-bookmark"
                />
            </div>
            <div className="rules-license-row">
                <Image src="IceFishingMadison.png" alt="People ice fishing on lake Monona" style={{maxWidth: 400,borderRadius: 12}}></Image>
                <p>
                    Opening day for many Wisconsin fishing seasons is traditionally the first
                    Saturday in May, but exact season dates vary by species and waterbody. Game
                    fish like walleye, northern pike, and muskellunge usually have defined open
                    and closed seasons, while some panfish may be open year-round on certain
                    lakes. Here is a table for the 2025-2026 Fishing season.
                </p>
            </div>
            <table className="rules-table">
                <thead>
                    <tr>
                        <th>Species</th>
                        <th>Season</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Early Inland Trout</td><td>Jan. 4 - May. 2</td></tr>
                    <tr><td>General Inland Trout</td><td>May. 3 - Oct. 15</td></tr>
                    <tr><td>General Inland Fishing</td><td>May. 3 - Mar. 1</td></tr>
                    <tr><td>Largemouth Bass Northern Zone Harvest</td><td>May. 3 - Mar. 1</td></tr>
                    <tr><td>Smallmouth Bass Northern Zone Harvest</td><td>Jun. 21 - Mar. 1</td></tr>
                    <tr><td>Large & Smallmouth Bass Southern Zone Harvest</td><td>May. 3 - Mar. 1</td></tr>
                    <tr><td>Large & Smallmouth Bass Catch And Release</td><td>All year</td></tr>
                    <tr><td>Musky Northern Zone Harvest</td><td>May. 24 - Dec. 31</td></tr>
                    <tr><td>Musky Southern Zone Harvest</td><td>May. 3 - Dec. 31</td></tr>
                    <tr><td>Northern Pike</td><td>May. 3 - Mar. 1</td></tr>
                    <tr><td>Walleye</td><td>May. 3 - Mar. 1</td></tr>
                    <tr><td>Lake Sturgeon (Winnebago system spearng)</td><td>Feb. 8 - Feb. 23</td></tr>
                    <tr><td>Lake Sturgeon (hook and line)</td><td>Sep. 6 - Sep. 30</td></tr>
                </tbody>
            </table>
        </section>

        {/* Bag & size limits */}
        <section className="rules-section">
            <div className="rules-section-heading">
                <h2 id="bag-limits">Bag & size limits</h2>
                <BookmarkButton
                id="rules-bag-limits"
                label="Bag & size limits"
                to="/LicensesAndRules#bag-limits"
                size="sm"
                className="rules-bookmark"
                />
            </div>
            <p>
                Daily bag limits control how many fish you can keep in a day, and size
                limits control which lengths you're allowed to harvest. Limits change
                by species and often by specific lake or river. Slot limits protect certain
                size ranges so more fish can reach spawning age. Heres a few key terms and table of the total limits per species:
            </p>
            <ul className="rules-list">
                <li>
                    <strong>Daily bag limit</strong> - how many fish you can keep in a single day.
                </li>
                <li>
                    <strong>Minimum length</strong> - fish under this length must be released.
                </li>
                <li>
                    <strong>Protected slot</strong> - a length range that must be released.
                </li>
            </ul>

            <table  className="rules-table">
                <thead>
                    <tr>
                        <th>Species</th>
                        <th>Total daily bag limit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Catfish</td> <td>25 in total. Only 1 may be a flathead from the Winnebago system</td>
                    </tr>
                    <tr>
                        <td>Cisco, whitefish and hybrids</td> <td>10 in total</td>
                    </tr>
                    <tr>
                        <td>Lake sturgeon</td> <td>1 per <strong>season</strong></td>
                    </tr>
                    <tr>
                        <td>Largemouth and smallmouth bass</td> <td>5 in total</td>
                    </tr>
                    <tr>
                        <td>Muskellunge</td> <td>1</td>
                    </tr>
                    <tr>
                        <td>Northern Pike</td> <td>5 total north of Hwy 10, 2 total south of Hwy 10</td>
                    </tr>
                    <tr>
                        <td>Panfish</td> <td>25 in total</td>
                    </tr>
                    <tr>
                        <td>Shovelnose sturgeon</td> <td>3 in total</td>
                    </tr>
                    <tr>
                        <td>Walleye, sauger and hybrids</td> <td>5 in total</td>
                    </tr>
                </tbody>
            </table>
        </section>

        {/* Methods & lines */}
        <section className="rules-section">
            <div className="rules-section-heading">
                <h2 id="methods">Legal methods & lines</h2>
                <BookmarkButton
                id="rules-methods"
                label="Methods & line limits"
                to="/LicensesAndRules#methods"
                size="sm"
                className="rules-bookmark"
                />
            </div>
            <p>
                The DNR says that the number of objects capable of catching a single fish (baited hook, a fly, a plug or lure) 
                can be at most three per person. As long as each way of fishing can catch one fish at a time, it works.
                Always look up the exact lake or river you plan to fish, because local regulations can override the general statewide rules.
            </p>
        </section>

        {/* Safety & ethics */}
        <section className="rules-section">
            <div className="rules-section-heading">
                <h2 id="safety">Safety & ethics</h2>
                <BookmarkButton
                id="rules-safety"
                label="Safety & ethics"
                to="/LicensesAndRules#safety"
                size="sm"
                className="rules-bookmark"
                />
            </div>
            <p>
                Beyond the legal rules, safe and ethical fishing keeps the resource healthy.
                Handle fish gently if you plan to release them, pack out all trash, respect
                private property and posted signs, and be mindful of noise and wake around
                other anglers and shoreline owners.
            </p>
        </section>

        {/* Official links */}
        <section>
            <h2 style={{ marginTop: "1.5rem" }}>Official resources</h2>
            <ul className="rules-list">
                <li>
                Full fishing regulations and season tables:{" "}
                <a href="https://dnr.wisconsin.gov/topic/fishing/regulations" target="_blank" rel="noreferrer">
                    Wisconsin DNR Fishing Regulations
                </a>
                </li>
                <li>
                General fishing info and where to fish:{" "}
                <a href="https://dnr.wisconsin.gov/topic/Fishing" target="_blank" rel="noreferrer">
                    Wisconsin DNR Fishing Page
                </a>
                </li>
                <li>
                License details and types:{" "}
                <a href="https://dnr.wisconsin.gov/topic/Fishing/outreach/FishingLicenses" target="_blank" rel="noreferrer">
                    Fishing licenses overview
                </a>
                </li>
                <li>
                Buy your license online through Go Wild:{" "}
                <a href="https://dnr.wisconsin.gov/gowild" target="_blank" rel="noreferrer">
                    Go Wild online licensing
                </a>
                </li>
            </ul>
        </section>
    </div>
    );
}
# Power Structures Revealed: The Technical Filter

```
 _____ _            _____         _           _           _
|_   _| |_  ___    |_   _|__ _ __| |_  _ _ (_) __ __ _ | |
  | | | ' \/ -_)     | |/ -_) _| ' \| ' \| / _/ _` || |
  |_| |_||_\___|     |_|\___\__|_||_|_||_|_\__\__,_||_|

 ___ _ _ _
| __(_) | |_ ___ _ _
| _|| | |  _/ -_) '_|
|_| |_|_|\__\___|_|
```

*What Distributed Systems Can and Cannot Solve in Music*

**Report 7 in the Power Structures Revealed series**

---

## Axioms and Starting Assumptions

Reports 1 through 5 documented the architecture: who consolidated control over the American recorded music industry (Report 1), how money flows through those structures (Report 2), how law and lobbying maintain them (Report 3), how a single transaction -- the sample clearance -- exposes all three forces operating simultaneously (Report 4), and what the AI disruption means for artists navigating the structure (Report 5). Report 6 extended the analysis further. This report begins a new arc -- three reports that ask whether distributed systems and smart contracts can do anything about the problems the first six reports identified.

This is Report 7. It is a diagnostic, not a prescription.

The reader should understand the assumptions that frame this analysis:

1. **The question is not whether distributed systems CAN be applied to music. The question is whether they solve problems that cannot be solved more simply.** This is the axiom that governs the entire report. The technology exists. Smart contracts work. Blockchains are operational. The question is not capability but necessity. If a centralized database with good API access solves the same problem at lower cost, with less complexity, and without requiring an ecosystem of token holders to sustain itself, then the distributed solution is not an improvement. It is overhead.

2. **No tokens. No extraction schemes.** The model is BitTorrent, not Ethereum ICOs. BitTorrent succeeded because it solved a genuine technical problem -- distributing large files across unreliable networks -- better than any centralized alternative. It did not succeed because it had a speculative token attached. It succeeded because the protocol was technically superior for its specific use case. That is the standard every proposed application in this report must meet. If the distributed architecture is not technically superior for the specific problem, it does not pass the filter.

3. **Skepticism is earned, not performative.** Over a decade of blockchain-plus-music projects have collectively raised north of $100 million in venture capital and produced less value for working musicians than a single well-run traditional distribution company. The graveyard is large. The survivors are few. This report starts with the failures because the failures contain the diagnostic information. Every dead project tells you something about what does not work. The question is whether the pattern of failure is total -- whether distributed systems have nothing to offer music -- or whether something survives after you clear away the wreckage.

4. **The coordination versus trust distinction is the intellectual backbone of this report.** Blockchain technology solves trust problems -- situations where adversarial parties need to transact without relying on a trusted intermediary. The music industry's most pressing problems are coordination problems -- situations where parties do not disagree about what should happen but cannot get organized to make it happen. Metadata standards, rights registration, identifier linking -- nobody is against these things. The industry cannot coordinate to achieve them. Blockchain is a sledgehammer for coordination problems. Understanding this distinction is prerequisite to understanding which applications survive the technical filter and which do not.

5. **No fabricated data.** Same standard as all prior reports. Every dollar figure, throughput estimate, project outcome, and cost comparison is sourced from the research files. Where a figure comes from a single source, it is marked `[single-source]`. Where data is unavailable, the gap is stated. This is especially important in a report about technology, where the temptation to project impressive-sounding numbers is acute and the track record of doing so in the blockchain-plus-music space is dismal.

6. **This report establishes what is worth building. Reports 8 and 9 will design and stress-test it.** The output of this report is a filter -- a clear determination of which music industry problems have genuine distributed systems advantages and which do not. Report 8 will design a protocol around the problems that pass the filter. Report 9 will attack that protocol from every angle. Nothing is proposed in this report. The diagnosis must be complete before the prescription begins.

---

## Table of Contents

- [Part 1: The Graveyard](#part-1-the-graveyard)
- [Part 2: The Coordination vs. Trust Distinction](#part-2-the-coordination-vs-trust-distinction)
- [Part 3: Where Distributed Systems Have Genuine Advantages](#part-3-where-distributed-systems-have-genuine-advantages)
- [Part 4: Where They Don't](#part-4-where-they-dont)
- [Part 5: The Throughput Constraint](#part-5-the-throughput-constraint)
- [Part 6: The Technical Filter -- What Passes](#part-6-the-technical-filter----what-passes)
- [Appendix A: Project Scorecard](#appendix-a-project-scorecard)
- [Appendix B: Throughput Calculations](#appendix-b-throughput-calculations)
- [Appendix C: Batch Settlement Cost Comparison](#appendix-c-batch-settlement-cost-comparison)

---

## Part 1: The Graveyard

### The Pitch

Every blockchain-plus-music project made the same pitch, give or take. The music industry is broken. Artists get exploited. Intermediaries extract too much value. The solution is decentralization -- put rights on a blockchain, automate royalties with smart contracts, let artists connect directly with fans, remove the gatekeepers. The technology exists. All we need is adoption.

The pitch was not wrong about the problems. Reports 1 through 5 documented those problems in exhaustive detail: the consolidation of the industry into three dominant groups controlling roughly 68.7% of recorded music revenue, the economic structures that channel value upward, the legal frameworks that maintain the power asymmetry, the sample clearance system that functions as a microcosm of the entire architecture. The problems are real. They are documented. They are severe.

But identifying a real problem is not the same as having a solution. And over the past decade, the blockchain-plus-music sector has demonstrated a reliable pattern: correctly diagnosing the disease, then prescribing the wrong medicine.

What follows is a full autopsy.

### Audius: The Decentralized Streaming Mirage

Audius launched in 2018 as a decentralized alternative to SoundCloud and Spotify, promising artists approximately 90% of revenue (versus roughly 70% on traditional platforms), direct fan relationships without intermediaries, and censorship-resistant content hosting. It was the most ambitious and well-funded attempt to build a decentralized music streaming platform.

**The user numbers are disputed.** Audius claimed 5 million monthly active users by August 2021 and 7.5 million by January 2026. Independent analysis has challenged these figures. One analyst found that all metrics for social media channels, app downloads, and song activity were "a fraction" of the claimed user count, with the platform's number-one trending track of all time garnering only 89,200 plays. The analyst estimated actual engaged users in the "tens to hundreds of thousands." [single-source -- Coin Bureau analysis]

**Artists do not get paid per stream.** Despite marketing around a 90% revenue share, Audius pays nothing per stream. Artist monetization is limited to: the top 5 trending tracks each week receive 100 AUDIO tokens (paid on Fridays), fan tips in AUDIO tokens, one-off airdrops, and a 10% platform fee on direct sales with 90% going to artists. At the current AUDIO price of approximately $0.02, 100 AUDIO tokens equals roughly $2. This is not a revenue model. It is a rounding error.

**The token collapsed.** AUDIO hit an all-time high of approximately $4.95 in March 2021. As of early 2026, it trades at approximately $0.02 -- a decline of 99.6%. Market cap has fallen to approximately $29 million. Binance announced delisting of the AUDIO/BTC trading pair in February 2026.

**Security breach.** In July 2022, a governance exploit allowed an attacker to drain 18.6 million AUDIO tokens (approximately $6.1 million at the time) from the community treasury. The actual proceeds were 705 ETH (approximately $1.08 million) due to limited liquidity.

**The diagnosis:** Audius built functional decentralized streaming infrastructure. The technology works -- content-addressed storage on IPFS, an on-chain content graph, migration to Solana for lower costs. But Audius solved a problem nobody had. Listeners do not choose streaming platforms based on database architecture. They choose them based on catalog, discovery algorithms, and user experience. Audius has none of the catalog that matters (no major label licenses), inferior discovery (less user data to train recommendations), and a token-denominated economy that introduces volatility working musicians cannot absorb. The platform essentially functions as a free upload service -- similar to early SoundCloud -- with crypto characteristics bolted on.

The failure pattern: solving the wrong problem. The music industry's streaming problem is not that the database is centralized. It is that the economics of streaming compress the value of recorded music and that major label market power determines how that compressed value is distributed. Decentralizing the database changes neither of those things.

### Royal: The Tokenized Version of Something That Already Existed

Royal, founded by DJ and producer 3LAU, launched in 2021 to let fans purchase fractional ownership of songs as "Limited Digital Assets" on the Polygon blockchain. Fans would earn streaming royalties alongside artists. The company raised $16 million in seed funding and $55 million in a Series A, with investors including Nas, Joyner Lucas, and a16z. Total: $71 million in venture capital.

**The numbers tell the story.** As of January 2023, Royal reported $7.5 million in total trading volume, $156,000 in cumulative royalties paid out to collectors, and $2.5 million raised for artists. One hundred fifty-six thousand dollars. Across all collectors on the entire platform. A single mid-tier artist earns more from Spotify in a quarter.

**The pivot.** In April 2024, Royal announced it was sunsetting its marketplace and pivoting toward challenges related to AI-generated music. Existing token trades can still occur on OpenSea. The core mission -- fractional music ownership via blockchain -- was abandoned within roughly two years of launch.

**The diagnosis:** Royal was a tokenized version of something that already existed. Fractional royalty ownership is available through traditional music finance companies -- Royalty Exchange, Hipgnosis, and others have been operating for years. Royal added blockchain complexity (wallets, tokens, gas fees) to an existing financial product while offering less liquidity, more friction, and a smaller buyer pool. The $71 million in venture capital produced $156,000 in artist royalties. That is a conversion rate of 0.22%.

The failure pattern: token economics as the real product. The value proposition was never really fractional music ownership. It was the speculative potential of the tokens -- the possibility that a Limited Digital Asset would appreciate in value beyond its underlying royalty stream. When the broader NFT market collapsed (trading volumes fell 97% from January 2022 peaks), the speculative component evaporated, and what remained -- a tiny royalty stream on a niche platform -- was insufficient to sustain the business.

### Sound.xyz: The NFT Bet

Sound.xyz, founded in December 2021, positioned itself as a platform where artists mint music NFTs, retain 100% ownership, and build direct economic relationships with fans. It raised $25 million, including from a16z, with backing from Snoop Dogg and Ryan Tedder.

**No public adoption metrics.** As of early 2026, specific adoption data -- number of active artists, monthly sales volume, total revenue distributed -- is not publicly available. The absence of public metrics is itself informative. Companies with impressive numbers publish them.

**The broader NFT market collapsed.** NFT trading volumes fell 97% from January 2022 peaks. Total NFT volume dropped from $26.3 billion in 2022 to $11.8 billion in 2023. Average NFT sale price fell from $3,894 to $293 -- a 92% decline -- between May 2022 and February 2023. By 2024, 96% of NFT collections were considered "dead."

**The diagnosis:** Sound.xyz built a cleaner product than most music NFT platforms. The technology was sound. But the entire premise was market-dependent: music NFTs only work if there is a functioning NFT market. When the speculative bubble collapsed, the foundation disappeared. Whether music NFTs can function as a sustainable economic model outside of speculative bubbles remains unproven. The isolated success stories that do exist -- Spottie WiFi generating $192,000 in 60 seconds from NFT sales, Kings of Leon selling "golden ticket" NFTs for $90,000 or more -- occurred during the 2021-2022 bubble and are better explained by novelty and speculation than by a repeatable economic model. [single-source on Spottie WiFi]

The failure pattern: building on a speculative substrate. If your product's value proposition depends on a broader speculative market, your product is a derivative of that speculation, not a standalone business.

### Ujo Music: $133.20

Ujo Music was a ConsenSys venture that aimed to automate royalty distribution via smart contracts, enabling direct artist-to-fan transactions on the Ethereum blockchain. In late 2015, Imogen Heap released "Tiny Human" through Ujo as a proof of concept.

**Total sales: $133.20.** Two hundred twenty-two purchases at $0.60 each.

**Purchasing was nearly impossible.** Buying the song required creating an Ethereum wallet, buying Bitcoin on an exchange, converting BTC to ETH, then using ETH to buy the track. This was 2015, before any mainstream crypto onramps existed. The process was so hostile to non-technical users that the press coverage about the experiment dwarfed the actual revenue by orders of magnitude.

**The self-aware post-mortem.** Ujo's own statement after the Tiny Human failure admitted: "We are but a few bright-eyed technologists with a special hammer, looking for the right nail." [single-source -- Ujo blog post, cited in David Gerard's analysis]

**Ujo shut down in early 2019.**

The failure pattern: the UX gap. Ujo demonstrated that blockchain advocates fundamentally underestimated the friction problem. Making a payment via Ethereum in 2015 was orders of magnitude harder than clicking "buy" on iTunes. The technology worked. Nobody could use it.

This pattern has been the most persistent and least acknowledged failure mode across the entire blockchain-plus-music space. Every project has encountered it. Most have dismissed it as a temporary inconvenience that would be solved by better wallets, account abstraction, fiat onramps, or time. A decade later, crypto UX remains a significant barrier for mainstream adoption. The inconvenience was not temporary. It was structural.

### Mycelia: The Right Diagnosis, the Wrong Vehicle

Mycelia, founded by Imogen Heap after her experience with Ujo, envisioned a "Creative Passport" -- a verified digital identity for musicians containing profile information, existing identifiers (ISRC, ISWC), works, business partners, and payment mechanisms. The goal was a universal, artist-controlled data layer.

**The concept was sound.** The Creative Passport was arguably the most technically coherent idea in the blockchain-plus-music space. It did not try to replace streaming or create speculative tokens. It addressed the genuine metadata and identity problem -- the problem that actually costs artists money, as documented in Reports 2 and 3. The MLC holds $426.9 million in historical unmatched royalties. The global unmatched pool is estimated at $2-4 billion annually (treat as directionally correct, not precise). The metadata crisis is real, it is expensive, and Mycelia correctly identified it.

**But it could not achieve network effects.** A single artist-led initiative, no matter how visionary, cannot compel the global music industry to adopt a new data standard. This requires institutional coordination that blockchain ideology -- decentralization, permissionlessness -- is poorly suited to provide. The Creative Passport has a LinkedIn page. The myceliaformusic.org website still exists. But there are no recent adoption metrics, user counts, or development updates publicly available.

The failure pattern: solving a coordination problem without coordination power. Mycelia needed every DSP, every PRO, every CMO, every label, and every distributor to adopt its standard for the Creative Passport to be useful. That is a coordination problem. And a small nonprofit without institutional leverage cannot solve a coordination problem by building a technically elegant system and hoping adoption follows. You need the institutions at the table. You need governance. You need the thing that "decentralization" was supposed to make unnecessary.

### Mediachain: The Acqui-hire That Tells the Story

Mediachain Labs built a decentralized, peer-to-peer database for connecting media with attribution information. It was a Brooklyn-based startup tackling the metadata problem with blockchain-based infrastructure.

**Spotify acquired Mediachain in April 2017** for an undisclosed amount. The acquisition came shortly after Spotify paid approximately $30 million to settle with the NMPA over unpaid royalties due to metadata gaps. Spotify had every incentive to want better metadata solutions. It had just paid $30 million because its metadata was inadequate.

**Spotify hired the team and shelved the technology.** There is no evidence that Spotify ever deployed Mediachain's blockchain-based technology in production. A 2020 report noted that Spotify was still "hiring someone to figure out exactly what to do with the technology" three and a half years after the acquisition. Spotify's metadata challenges persist -- the company continues to rely on traditional databases and the MLC for rights matching.

**The diagnosis:** The company with the most urgent operational need for better metadata solutions acquired a blockchain startup that was building exactly that -- and did not use the blockchain technology. They wanted the engineers, not the architecture. This is perhaps the single most telling data point in the entire blockchain-plus-music space. If Spotify -- which has paid tens of millions of dollars in settlements due to metadata failures, which operates at a scale where even small efficiency gains translate to significant savings, which has every economic incentive to adopt superior metadata technology -- evaluated blockchain-based metadata and chose not to use it, what does that tell you about the technology's fitness for this particular problem?

It tells you the problem is not the database architecture. It is the data.

### Choon and Musicoin: The Quick Deaths

**Choon** (2018-2019) was a streaming platform founded by DJ Gareth Emery that paid artists in NOTES tokens. It shut down in December 2019, approximately 18 months after launch. Artists were told they could swap tokens to Emanate, but Emanate denied any formal agreement with Choon. Artists' token balances became worthless.

**Musicoin** was a proof-of-work blockchain specifically for music streaming. When the crypto bear market hit, miners left for more profitable chains. The network could no longer process transactions. The site froze and became non-functional. A music platform that stops working when miners find something more profitable to mine is not infrastructure. It is a dependency.

The failure pattern (shared): token-denominated ecosystems create dependencies on speculative markets that have nothing to do with music. When the token price falls, the miners leave, the platform economics collapse, and artists are left holding worthless tokens. This is not a failure of execution. It is a design flaw.

### The Survivors and the Announced

Two projects deserve mention because they do not fit neatly into the graveyard: one because it is technically still alive, and one because it has not yet launched.

**Opulous** tokenizes music royalties into "Music Fungible Tokens" and offers DeFi loans to musicians based on streaming earnings. It was built on Algorand, is currently transitioning to Arbitrum, and uses AI to predict streaming revenue. It has an OPUL utility/governance token with 500 million total supply. Opulous is still operational as of early 2026, but specific adoption metrics are scarce. The project is sufficiently early and data-poor that a definitive assessment is premature. The model -- DeFi loans against streaming income -- is genuinely interesting as a financial product, but it is not clear that it requires a blockchain. Traditional music advance companies (Beatbread, Sound Royalties) offer functionally similar products without distributed ledger technology.

**Sony's Soneium** is a blockchain platform announced by Sony for music rights management, including Web3 capabilities, NFTs, and tokenized music. As of March 2026, there is no production deployment data available. It is an announcement, not a product. Sony's involvement is notable because it is the first major label to build its own blockchain infrastructure rather than investing in third-party projects. Whether this signals genuine conviction in distributed systems for music or a corporate hedge against missing a trend remains to be seen. The diagnostic framework of this report applies regardless: the question is not whether Sony can build a blockchain platform, but whether it solves problems that Sony's existing centralized infrastructure cannot solve more simply.

### The Deeper Pattern: Technology as Narrative

One observation connects the entire graveyard: in every failed project, the technology served as narrative before it served as infrastructure. The blockchain was the story -- the hook that attracted venture capital, the differentiator that generated press coverage, the ideology that built a community. The music application was secondary.

This is not unique to music. It is a pattern across the broader blockchain ecosystem. But it is particularly damaging in music because the industry's problems are particularly ill-suited to the technology being sold. When a blockchain-based supply chain startup fails, it fails because the coordination problem was harder than expected. When a blockchain-based music startup fails, it fails for that reason AND because the problem was frequently misdiagnosed from the start. The supply chain project at least identified the right category of problem (tracking goods through multi-party networks). The music project often identified the wrong category entirely (building decentralized streaming when the problem was metadata, or tokenizing ownership when the problem was accounting).

The lesson is not "do not build technology for music." The lesson is: identify the problem first, with diagnostic rigor, and only then ask what technology -- distributed or otherwise -- best addresses it. Start with the problem, not the solution. Every project in the graveyard did the opposite.

### The 1000 True Fans Thesis: Tested and Found Wanting

One narrative deserves separate treatment because it animated so much of the venture capital thesis behind these projects: the idea that crypto would enable a new economic model for artists based on direct fan relationships.

Kevin Kelly's 2008 essay argued that creators need only 1,000 true fans, each spending approximately $100 per year, to earn $100,000 per year. Chris Dixon at a16z adapted this for NFTs in 2021, arguing that NFTs could reduce the number to 100 fans by enabling higher per-fan monetization through digital scarcity and direct ownership.

**Did any blockchain music project systematically enable this?** No. Isolated success stories exist -- Spottie WiFi generating $192,000 in 60 seconds from NFT sales with only 200 Spotify listeners [single-source], Kings of Leon selling "golden ticket" NFTs for $90,000 or more [single-source]. But these are outliers, not a model. They occurred during the 2021-2022 NFT speculative bubble. No platform systematically enabled a large population of artists to build sustainable 1,000-true-fan businesses via crypto.

The examples that exist are better explained by novelty and speculation than by a repeatable economic model. The Spottie WiFi case is instructive: an artist with 200 Spotify listeners generated $192,000 from NFT sales. That is not a music business. That is a crypto collectibles business that happens to involve a musician. The revenue came from the novelty of the format and the speculative dynamics of the NFT market, not from 200 fans each paying $960.

Meanwhile, platforms that actually enabled the 1,000-true-fans model -- Patreon, Bandcamp, and even Kickstarter -- did so without blockchain. Bandcamp alone processed over $1 billion in direct artist-to-fan payments since its founding. These centralized platforms achieved what the entire blockchain-plus-music sector promised but could not deliver: direct economic relationships between artists and fans at scale.

The 1000-true-fans thesis remains valid in theory. Crypto did not prove to be the mechanism that unlocks it.

### The Aggregate Picture

The aggregate numbers are worse than the individual project stories suggest, because they reveal the opportunity cost.

During the same period (roughly 2015-2025) that the blockchain-plus-music sector was absorbing over $100 million in venture capital and producing negligible artist value, the conventional music infrastructure saw significant innovation:

- **DistroKid** (founded 2013) became the largest music distribution platform, distributing payments to hundreds of thousands of artists through a centralized web application. No tokens. No wallets. Artists upload music and receive money.
- **Bandcamp** facilitated over $1 billion in direct fan-to-artist payments. The model is simple: fans pay artists. The platform takes a percentage. No blockchain required.
- **Splice** built a sample and sound marketplace that fundamentally changed how producers access sounds, processing millions of transactions. Centralized, conventional, effective.
- **TuneCore** and **CD Baby** have collectively distributed billions to independent artists over their operating histories.

Each of these companies runs on traditional databases. None required miners. None collapsed when a speculative market turned. None asked artists to understand gas fees or manage wallets. They solved real distribution and payment problems with conventional technology -- and they did it at a scale that no blockchain project approached.

The comparison is not meant to argue that centralized systems are always better. It is meant to establish the baseline: if you are going to build a distributed system for music, you must explain what it provides that these proven, scaled, conventional systems do not. "Decentralization" is not a sufficient answer. "Trustlessness" is not a sufficient answer unless you can identify the specific trust failure it addresses. The burden of proof is on the distributed solution.

### The Scorecard

Before we synthesize, look at the numbers:

| Project | Founded | Status (2026) | Money Raised | Value Created for Artists |
|---------|---------|---------------|-------------|--------------------------|
| Audius | 2018 | Operating | $12M+ | Negligible (no per-stream pay) |
| Royal | 2021 | Pivoted | $71M | $156K royalties total |
| Sound.xyz | 2021 | Operating (no metrics) | $25M | Unknown |
| Ujo Music | 2015 | Dead (2019) | ConsenSys-funded | $133.20 total |
| Mycelia | 2015 | Unclear | Grants/self-funded | Concept only |
| Mediachain | 2016 | Acqui-hired (2017) | Undisclosed | None via blockchain |
| Choon | 2018 | Dead (2019) | Unknown | Lost to token collapse |
| Musicoin | 2017 | Dead | Unknown | Lost to network death |

Conservative total venture capital invested in these projects: over $100 million. Documented royalty value created for artists: $156,133.20. The appendix contains a more detailed scorecard.

DistroKid, a single centralized music distribution company, distributed payments to hundreds of thousands of artists. CD Baby, founded in 1998, has paid artists over $1 billion cumulatively. TuneCore has distributed billions to independent artists. Each of these companies operates on a centralized database. None required a token. None required miners. None collapsed when a speculative market turned.

> The approximately $100 million in venture capital invested in blockchain music projects produced less measurable value for working musicians than a single well-run traditional distribution company.

This is not a cherry-picked comparison. It is the central empirical finding of a decade of experimentation. The burden of proof now sits squarely on anyone proposing to build another distributed system for music. After this much capital, this many projects, and this many failures, "trust me, this time is different" is not a sufficient argument. You need to explain, with technical precision, what your distributed architecture provides that a centralized one cannot. That is what the rest of this report attempts to do.

### Recurring Failure Patterns

Five patterns recur across the graveyard. Each tells you something about what not to build.

**Pattern 1: Solving the wrong problem.** Most projects focused on payment and streaming -- where Spotify and Apple Music work adequately from a UX perspective -- rather than metadata and rights management, where the actual crisis exists. Listeners do not care whether the database behind their streaming service is centralized or decentralized. They care about catalog, recommendations, and whether the app works. Solving for database architecture when the user problem is elsewhere is a failure of problem identification, not execution.

**Pattern 2: Token economics as the real product.** Many projects were primarily vehicles for token speculation, with music being the narrative wrapper. The token gave the project a mechanism for raising capital, generating hype, and creating a speculative asset. When token prices collapsed, the projects lost their economic engine -- because the economic engine was never music. It was speculation. The tell is simple: if the project would not be viable without the token, then the token is the product, not the music application.

**Pattern 3: The chicken-and-egg problem.** A decentralized music platform needs both artists and listeners. Artists will not come without listeners; listeners will not come without a catalog comparable to Spotify's 100 million or more tracks. No blockchain project came within 1% of Spotify's 675 million-plus monthly active users. The cold start problem is not solvable by technology. It is a network effects problem, and network effects favor incumbents.

**Pattern 4: The UX gap.** Every blockchain music project required users to navigate wallets, tokens, gas fees, and other crypto infrastructure. This friction eliminated 99% or more of potential users. The gap between "create an account and stream music" (Spotify) and "create a wallet, buy tokens, approve transactions, manage gas fees, and stream music" (any blockchain platform) is not a gap that better UX design closes. It is a fundamental architectural difference. Until interacting with a blockchain is as invisible to the user as interacting with a relational database is on Spotify, the UX gap persists.

**Pattern 5: Solving a coordination problem with trustless technology.** This is the deepest failure, and it receives its own section in Part 2. Music rights management requires industry-wide agreement on standards. Blockchain's value proposition -- trustlessness, permissionlessness -- is orthogonal to what the industry actually needs: coordination, standardization, institutional adoption. You cannot permissionlessly coordinate. Coordination requires permissions. It requires agreement. It requires governance. Blockchain's core innovation -- removing the need for a trusted coordinator -- is precisely the wrong tool for a problem that requires a coordinator.

### What Survived

It would be intellectually dishonest to conclude that nothing survived. Two observations complicate the total-failure narrative:

First, some of the technology built by failed projects found use elsewhere. IPFS-based content addressing, which Audius helped pioneer for music files, has applications beyond decentralized streaming. Smart contract patterns for royalty splits, which multiple projects explored, have legitimate utility even if the specific platforms failed. Technology can outlive the projects that developed it.

Second, the diagnostic work -- the identification of problems -- was often excellent. Mycelia correctly identified the metadata crisis. Royal correctly identified the desire for fan-artist economic participation. Ujo correctly identified the appeal of automated royalty distribution. The problems these projects identified were real. The solutions were wrong. But a correct diagnosis has value even when the treatment fails.

The question for the rest of this report is whether the diagnostic work can be separated from the failed prescriptions -- whether, after acknowledging everything that does not work, a narrow set of applications remains where distributed architecture provides something a centralized system genuinely cannot.

---

## Part 2: The Coordination vs. Trust Distinction

### Definitions

This distinction is the most important conceptual framework in the report. Get it wrong and every subsequent analysis is contaminated. So the definitions need to be precise.

**A trust problem** exists when two or more parties need to transact but do not trust each other -- or any available third party -- to faithfully execute the transaction. The risk is not incompetence or disorganization. The risk is deception: one party will cheat if given the opportunity. Blockchain's innovation is eliminating the need for trusted intermediaries in these situations. Bitcoin does not require you to trust a bank. Ethereum smart contracts do not require you to trust a counterparty to honor the terms. The protocol enforces the terms. That is the value proposition.

**A coordination problem** exists when multiple parties agree on what should happen but cannot organize themselves to make it happen. The barrier is not distrust. It is fragmentation, misaligned incentives, legacy infrastructure, standards gaps, or institutional inertia. Everyone agrees that music metadata should be standardized. Nobody disagrees. The problem is that there are dozens of organizations maintaining separate databases with separate standards, and no one has the authority or the incentive to impose a universal solution.

The difference matters because the solutions are different. Trust problems are solved by trustless protocols -- mechanisms that enforce correct behavior without requiring participants to trust each other. Coordination problems are solved by governance -- institutions, standards bodies, agreements, mandates. Using a trustless protocol to solve a coordination problem is like using a hammer to solve a jigsaw puzzle. The tool is powerful. It is the wrong tool.

### Why the Distinction Gets Conflated

The blockchain-plus-music pitch routinely conflates these two categories. "The industry needs transparency" is presented as though transparency is a trust problem, when in most cases it is a coordination problem. Consider:

**"Artists cannot see how their royalties are calculated."** Is this because labels are actively hiding the calculation (trust problem) or because the calculation involves dozens of data sources across multiple organizations, each with its own reporting format and timeline, and nobody has built a unified view (coordination problem)? The answer is: both, but the coordination component is larger. Even if every label published its royalty calculations in full, an artist with publishing through one company, distribution through another, master ownership split across territories, and mechanical rights administered by the MLC would still face a fragmented, difficult-to-reconcile picture. The opacity is partly strategic (labels benefit from complexity) and partly structural (the system is genuinely complex). Blockchain addresses the strategic opacity. It does not address the structural complexity.

**"Metadata is unreliable."** Is this because parties are deliberately corrupting metadata (trust problem) or because metadata is entered inconsistently across dozens of systems with no enforced standard (coordination problem)? It is overwhelmingly the latter. Nobody benefits from wrong metadata. When a song goes unmatched, the royalties sit in a black box -- and while the eventual market-share distribution of black box funds does benefit major publishers (as documented in Reports 2 and 3), this is a second-order effect of a system that was not designed to benefit from bad metadata. The metadata problem is a tragedy of the commons, not a conspiracy. And tragedies of the commons are solved by governance (standards, enforcement, collective action), not by trustless protocols.

**"The industry needs a single source of truth."** Is this because parties distrust each other's databases (trust problem) or because nobody has built a unified database and gotten everyone to use it (coordination problem)? Again, overwhelmingly the latter. PROs do not distrust each other's ownership data -- they have incompatible systems that were built independently over decades. The solution is interoperability and reconciliation, which Songview has demonstrated is achievable through institutional cooperation. The solution is not a trustless ledger that no one controls, because the problem is not about control -- it is about coordination.

This pattern of conflation is not innocent. It serves a commercial purpose: if you frame coordination problems as trust problems, you can pitch blockchain as the solution. Venture capitalists who understand blockchain's value proposition for trust problems will fund your project. But the product will fail, because you are solving the wrong problem. That is the story of the graveyard in Part 1.

### Mapping the Music Industry's Problems

With those definitions in hand, we can map the music industry's actual problems to the framework.

#### Trust Problems (Where Blockchain Has Structural Relevance)

**Royalty accounting opacity.** Labels report royalties to artists via semi-annual statements that are widely regarded as opaque. Independent audits find errors in up to 95% of royalty statements examined. [single-source -- Royalty Review Council, based on approximately 6,000 audits since 1971] Artists who audit typically recover 10-30% of underreported royalties. Cross-collateralization allows labels to offset unrecouped costs from one album against royalties from another. Recoupment calculations are complex and artists have limited visibility into what has been charged against their accounts.

This is a genuine trust problem. Artists do not trust labels' royalty accounting -- and the audit data suggests that distrust is empirically justified. A system where the artist can independently verify every calculation, every deduction, and every payment without relying on the label's self-reported statements would address a real asymmetry. Smart contracts that automate royalty calculations and make every step verifiable on-chain would provide something a label-controlled database cannot: independent verification.

> **Hypothesis:** On-chain royalty accounting with verifiable audit trails would reduce the incidence of royalty underreporting.
>
> **Falsification condition:** If artists with on-chain royalty accounting still experience comparable rates of underpayment -- because the inputs to the smart contract (stream counts, applicable rates, deduction categories) are still controlled by the label and can be manipulated before they reach the contract -- then the problem is not the accounting layer but the data feed. On-chain accounting only helps if the inputs are trustworthy. If the oracle problem (getting reliable real-world data into the smart contract) is unsolvable for music royalties, this advantage evaporates.

**DSP self-reporting of stream counts.** Streaming platforms self-report the number of streams on which royalties are calculated. There is no independent verification mechanism. Artists and rights holders must trust the DSP's count. Given the scale -- tens of billions of streams daily across platforms -- even small systematic errors compound into significant revenue differences.

This is also a trust problem. The entity reporting the data is the same entity whose costs increase with the reported number. There is a structural incentive for underreporting, even if no DSP has been publicly shown to engage in it. A verifiable counting mechanism that does not rely on the DSP's self-reported data would address this asymmetry.

> **Hypothesis:** Independent, verifiable stream counting would ensure more accurate royalty payments.
>
> **Falsification condition:** If building a truly independent stream counting mechanism proves technically infeasible at scale (requiring access to DSP systems that DSPs will not grant), then the trust problem remains but is not solvable by distributed systems either. Blockchain cannot verify what it cannot observe.

#### Coordination Problems (Where Blockchain is the Wrong Tool)

**Metadata standardization.** The music industry has no universal standard for encoding rights information. ISRCs identify sound recordings. ISWCs identify musical compositions. IPIs identify people and entities. These identifiers are maintained by different bodies (IFPI, CISAC, CISAC) with no enforced cross-referencing. There is no mandatory link between a recording and its underlying composition at the point of distribution. The DDEX standard exists as an industry-standard XML schema for communicating metadata between trading partners. Adoption is the bottleneck, not the technology.

This is a coordination problem. No party in the music industry is against metadata standardization. Publishers want it. Labels want it. DSPs want it (Spotify paid $30 million to settle metadata-related claims). PROs want it. The problem is that standardization requires all parties to agree on a format, adopt it, and maintain data quality -- a coordination challenge that involves dozens of organizations across hundreds of countries.

Blockchain does not help here. A distributed ledger can store metadata, but it cannot make the metadata correct. If an artist uploads a song to a DSP without complete metadata -- which is the root cause of the MLC's matching challenges -- that same incomplete metadata would be written to a blockchain. Except now it is immutably incomplete. The problem is the input, not the database.

**Rights registration fragmentation.** Music rights in the US are tracked across multiple siloed organizations: ASCAP, BMI, SESAC, and GMR for performance rights; the MLC for digital mechanical rights; SoundExchange for digital performance rights on the master side. Each has its own registration system, identifiers, and matching engine. There is no single authoritative registry of who owns what.

This is a coordination problem. The fragmentation exists because of institutional history, competitive dynamics between PROs, and the absence of a mandate to unify. It is not because parties distrust each other's databases. ASCAP and BMI launched Songview -- a joint initiative that reconciles ownership data across PROs for over 38 million works -- without any blockchain involvement. It required "tens of thousands of development hours" to build a proprietary reconciliation engine. But it works. And it works because the two organizations coordinated -- agreed to share data, built a common system, devoted resources to reconciliation.

> Songview proves that the reconciliation problem is solvable with centralized infrastructure and cooperation. It does not require a blockchain. The bottleneck was institutional willingness to share data, not the database technology.

**Identifier linking.** There is no mandatory, enforced link between ISRCs (recording IDs) and ISWCs (composition IDs). Songs are routinely uploaded to DSPs with incorrect, duplicate, or missing ISRCs. ISWCs are frequently incomplete. Linking these identifiers is a governance problem -- someone needs the authority to mandate that every recording uploaded to a DSP must include a verified ISWC. No blockchain protocol can create that mandate. Only regulation or institutional agreement can.

**Data quality at the point of entry.** The MLC has stated that increasingly, unmatched royalties are simply because the musical work was never registered in their system. Songs go unmatched because of typos in artist names, title variations, missing songwriter credits. These are input problems. A blockchain makes them worse, not better, because immutability means errors are harder to correct after the fact.

### The Sledgehammer Problem

The pattern is clear. The music industry's most expensive problems -- the ones that cost artists billions in unclaimed royalties, that perpetuate the power asymmetry documented in Reports 1 through 5 -- are overwhelmingly coordination problems. They exist because fragmented institutions cannot agree on standards, because metadata is entered inconsistently, because no single authority has the power to impose a universal solution. These problems require governance: institutional agreements, standards mandates, data quality enforcement at the point of creation.

Blockchain's core innovation -- trustless consensus among adversarial parties -- is orthogonal to these challenges. It is not that blockchain is bad technology. It is that blockchain is technology designed for a different class of problem. Using it for coordination problems is not just inefficient; it is counterproductive. Blockchain's permissionless, decentralized nature actively works against the centralized coordination authority that the music industry's coordination problems require.

This does not mean distributed systems have no role. It means the role is narrower than the pitch implied. The genuine trust problems -- royalty accounting opacity, verifiable audit trails, automated splits where the math needs to be independently confirmable -- constitute a real but limited domain. The coordination problems -- metadata, standards, registration, data quality -- require institutional solutions that blockchain cannot provide and may actually impede.

### The MLC as Counter-Example

The Mechanical Licensing Collective deserves specific attention because it is the closest existing analog to what a distributed rights management protocol would need to do -- and it is entirely centralized.

The MLC was created by the Music Modernization Act of 2018 and became operational on January 1, 2021. It administers a blanket mechanical license for digital streaming, matching sound recordings to musical works and distributing royalties to songwriters and publishers. As of October 2024, the MLC has distributed nearly $2.5 billion in total royalties. Its current match rate is approximately 90%.

The MLC received $426.9 million in historical unmatched royalties accrued by 21 DSPs between 2007 and 2020. It holds approximately $209.7 million in blanket unmatched royalties from ongoing operations. That unmatched pool represents a genuine failure -- money that belongs to creators but cannot reach them. The question is whether a distributed system would do better.

The evidence suggests it would not. The MLC's matching challenges stem from:

1. **Missing data at the source.** Songs are uploaded to DSPs without complete metadata. No database technology, distributed or centralized, can match data that does not exist.
2. **Conflicting ownership claims.** Multiple parties claim ownership of the same work, with shares exceeding 100%. This requires human adjudication, not trustless consensus.
3. **No universal identifier linking recordings to compositions.** This is the ISRC-ISWC gap discussed above -- a coordination problem.
4. **Unregistered works.** The work was never registered in the MLC's system. A blockchain-based registry faces the exact same problem: if no one registers the work, it cannot be matched.

A blockchain-based system would face all the same problems plus additional ones: immutability of errors (corrections become harder), governance complexity (who arbitrates disputes on a decentralized ledger?), performance at scale, and privacy concerns (publishing deal terms and share splits are commercially sensitive; a transparent ledger conflicts with business confidentiality).

The MLC is imperfect. Its 10% unmatched rate represents hundreds of millions of dollars in delayed or misdirected payments. But those failures are data input failures, not database architecture failures. Replacing the MLC's centralized database with a distributed ledger would change the technology without addressing the cause of the failures. The MLC's data-matching partners -- Blokur, Jaxsta, Pex, Salt, SX Works -- all use conventional technology. None use blockchain.

> The MLC proves two things simultaneously: first, that the coordination problem is solvable with centralized infrastructure (90% match rate, $2.5 billion distributed). Second, that the remaining failures are input problems that no database architecture can fix.

### What the Academic Literature Says

The coordination-versus-trust framework is not an idiosyncratic lens. It is supported by the academic research on blockchain applications in music.

**ScienceDirect (2024)** examined blockchain applications for performers' collective management organizations and found that digital transformation via blockchain faces barriers including "regulatory gaps, lack of legal frameworks for tokenized rights, and the practical complexity of implementing smart contracts across jurisdictions." These are coordination and governance barriers, not trust barriers. The technology works. The institutional framework does not exist to support it.

**Nature (2024)** studied Korean artists' perceptions of blockchain and found "ambivalent perceptions" -- artists hope for new possibilities while perceiving the "impracticality of such innovation." For artists who have seen little change despite years of advocacy, blockchain promises seem "too good to be true." This is a rational response to a decade of unfulfilled promises. The ambivalence is earned.

**The American Bar Association (2023)** identified blockchain, smart contracts, and NFTs as a potential solution to the $424 million unmatched royalty problem, but acknowledged significant implementation barriers. Notably, the ABA analysis focused on the potential of the technology in theory while acknowledging that the barriers to adoption are institutional and regulatory -- coordination problems, not trust problems.

**A Springer (2023) study** on blockchain-based DRM design principles for music found that "existing centralized DRM systems mostly serve the interests of major publishers, with scant inclusion of rights owners, creators, and consumers." This is an important finding -- it confirms that the current centralized systems are not merely imperfect but structurally biased. However, the solution the study proposes (blockchain-based DRM) faces the same adoption barrier: the entities that benefit from the current system's bias are the entities that would need to adopt the new system.

The academic consensus, to the extent one exists, mirrors this report's framework: the technology has theoretical merit for specific applications, but the barriers are institutional, not technological. This is another way of saying: the problems are coordination problems, and technology alone cannot solve them.

### What This Means for Everything That Follows

The coordination-versus-trust framework establishes the boundaries for the rest of this report. When we evaluate specific distributed systems applications in Parts 3 and 4, the first question is always: is this a trust problem or a coordination problem? If it is a trust problem, distributed systems may have a genuine architectural advantage. If it is a coordination problem, distributed systems are the wrong tool, and the analysis should focus on what the right tool looks like instead.

This framework also explains why the graveyard in Part 1 is so large. Most of the dead projects were trying to solve coordination problems -- metadata, standards, adoption, catalog access -- with trustless technology. The projects that came closest to utility (automated royalty splits, verifiable accounting) were addressing trust problems. The pattern is not coincidental.

---

## Part 3: Where Distributed Systems Have Genuine Advantages

### The Standard

This section applies a strict standard. For an application to pass the filter, it must satisfy three conditions:

1. **The distributed architecture provides something a centralized database cannot.** "Cannot" is doing heavy lifting here. Not "does not currently" -- many centralized systems could add transparency features, audit trails, and automated splits. The question is whether there is a structural reason a centralized system cannot replicate the distributed system's advantage. If a centralized database plus audit logging provides 90% of the same value, the distributed system's marginal advantage must justify its additional complexity.

2. **The problem is a trust problem, not a coordination problem.** Per the framework established in Part 2.

3. **The application does not depend on a speculative token to be viable.** Per the BitTorrent standard established in the Axioms. If the application would not work without a token that people speculate on, then the application is not self-sustaining infrastructure -- it is a speculative financial product with an infrastructure narrative.

Each application below states a hypothesis, presents the evidence, and identifies the falsification condition -- the circumstances under which the claimed advantage would not hold.

### Application 1: Automated Royalty Splits via Smart Contracts

**The problem.** When a song involves multiple contributors -- songwriter, producer, featured artist, publisher, label -- the revenue must be split among them according to agreed percentages. Currently, this is handled by the entity that receives the revenue (typically the distributor or label), which calculates each party's share and makes payments. The process is slow (semi-annual in many cases), opaque (artists often cannot verify the calculations), and error-prone (the 95% error rate in audited royalty statements, while from a single source, is directionally consistent with industry experience).

**The distributed systems advantage.** A smart contract can encode the split percentages in code and execute them automatically when revenue arrives. The calculation is deterministic, verifiable, and tamper-proof. No party can unilaterally alter the split after it is set. Changes require multi-party approval. Every payment is recorded on-chain and can be independently audited.

**Why this is a trust problem.** The artist does not trust the label or distributor to calculate splits correctly and pay promptly. The audit data supports that distrust. A smart contract eliminates the need to trust the intermediary's calculations -- the code is the calculation, and anyone can verify it.

**Why a centralized database cannot fully replicate this.** A centralized database can certainly automate split calculations. Platforms like Stem already do this. But the key difference is verifiability by the payee. In a centralized system, the payee must trust the platform's database -- trust that the recorded split percentages have not been altered, that the incoming revenue figures are accurate, that the calculations were performed correctly. An on-chain smart contract makes all of these independently verifiable without requiring trust in any single party.

The distinction is subtle but real. A well-run centralized platform with audit logging provides most of the same functionality. The on-chain advantage is marginal for honest platforms and significant for dishonest ones. The question is whether the industry's track record -- 95% error rates in audited statements, billions in unclaimed royalties -- justifies building for the dishonest case.

**Evidence.** Automated royalty splits are the most mature smart contract application in music. Multiple platforms have implemented them. The technology works. The remaining challenges are not technical but practical, and they deserve enumeration because they define the scope of what smart contracts can and cannot handle:

- **Simple splits.** A song has four contributors with fixed percentages: 40% songwriter, 30% producer, 20% featured artist, 10% publisher. Smart contracts handle this trivially. Revenue in, split calculation, distribution out. This is the case that appears in every pitch deck.

- **Cross-collateralization.** A label recoups costs from Album A against royalties earned by Album B. This requires a smart contract that tracks recoupment balances across multiple releases -- technically feasible but significantly more complex. The contract must know the recoupment balance, the order in which earnings are applied, and the rules for when recoupment is complete. Each label has its own contractual language for these rules.

- **Territory-specific rates.** A song earns different royalty rates in different countries. The German mechanical rate differs from the US rate differs from the Japanese rate. A smart contract that handles global royalty distribution must encode (or receive as input) territory-specific rate tables. This is manageable but expands the surface area for errors in the input data.

- **Advances against future royalties.** The artist received a $50,000 advance. Royalties are withheld until the advance is recouped. The smart contract must track the running recoupment balance and switch from withholding to distributing at the right threshold. Straightforward in isolation, but combined with cross-collateralization across albums and territory-specific rates, the complexity compounds.

- **Producer points after recoupment.** Many producer agreements specify that the producer receives a royalty only after the artist has recouped. The smart contract must track the artist's recoupment status and conditionally activate the producer's split. Again, feasible but adding layers of conditional logic.

None of these individually invalidates the smart contract approach. But collectively, they illustrate that the real-world application is considerably more complex than "split revenue four ways." A production-ready royalty split smart contract for the music industry would need to handle all of these cases, and the edge cases multiply when you consider the diversity of contractual arrangements across the industry. The advantage remains genuine -- verifiable, tamper-proof execution of complex split logic -- but the implementation cost is higher than the pitch implies.

> **Hypothesis:** Smart contract-based royalty splits reduce errors and increase timeliness of payments compared to traditional label/distributor accounting.
>
> **Falsification condition:** If the inputs to the smart contract -- the revenue figures, the applicable rates, the deduction categories -- are still provided by a centralized entity (the DSP or label) and can be manipulated before they reach the contract, then the smart contract enforces accuracy only for the math, not for the data. The advantage is real but bounded: it catches arithmetic errors and prevents post-hoc split modifications, but it does not prevent input manipulation. If input manipulation is the primary source of royalty errors (rather than calculation errors), the smart contract's advantage is smaller than it appears.

**Verdict: PASSES the technical filter.** The advantage is genuine, bounded, and does not depend on a speculative token. This is the strongest case for distributed systems in music.

### Application 2: Verifiable Royalty Accounting and Audit Trails

**The problem.** Artists currently receive royalty statements that are, as described in the research, "dozens of pages of unclear line items, lump sums, and deductions." Payout timelines are typically semi-annual, with royalties arriving 12-18 months after the streams occur. The audit process is expensive -- artists who suspect underpayment must hire specialized auditing firms, and the cost of an audit can exceed the amount recovered. The information asymmetry is structural: the label knows everything, the artist knows what the label tells them.

**The distributed systems advantage.** On-chain royalty accounting creates a permanent, timestamped, independently verifiable record of every royalty calculation and payment. The artist does not need to hire an auditor to access the data -- the data is on-chain. Recoupment balances can be checked in real time rather than waiting for semi-annual statements. Every deduction is recorded and attributable.

**Why this is a trust problem.** The audit data is unambiguous: artists are systematically underpaid, and the information asymmetry between label and artist is the mechanism by which underpayment occurs. The label controls the data. The artist must accept the label's reporting or pay for an independent audit. This is a textbook trust problem -- the entity reporting the data has an economic interest in the data being lower.

**Why a centralized database cannot fully replicate this.** A centralized database owned by the label could, in theory, provide the same transparency -- a dashboard showing real-time recoupment balances, itemized deductions, and payment history. Some labels have moved in this direction. But the key word is "owned by the label." The label controls the database, controls what data is displayed, and can alter records without the artist's knowledge. An on-chain record cannot be altered unilaterally. The audit trail is not provided by the entity being audited -- it is maintained by the protocol.

This is one of the clearest cases where decentralization provides something centralization structurally cannot. A label-owned transparency dashboard is still a trust-me system. An on-chain audit trail is a verify-it-yourself system.

**Evidence.** No major label or DSP currently uses on-chain royalty accounting in production. The theoretical model -- DSP reports streaming data to a smart contract or oracle, the contract calculates royalties per agreed splits, payments flow automatically, every step is visible on-chain -- has been described but not deployed at scale. The absence of real-world evidence is a limitation.

**What verifiable accounting would concretely change.** Consider the current experience of a signed artist trying to understand their royalty statement. They receive a semi-annual report -- typically 12-18 months after the streams occurred -- containing pages of line items, lump sums, and deductions. If they suspect errors, they must hire a specialized auditing firm (the major firms include the Royalty Review Council and MGO CPA) at significant cost. The audit takes months. Even when errors are found and additional payments secured, the artist bears the audit cost and the relationship friction of having audited their label.

Now consider the alternative. The artist opens a dashboard that reads from on-chain records. They can see, in near-real-time (or at the batch settlement frequency -- weekly or monthly), how many streams were reported by each DSP, what rate was applied, what deductions were taken and under what category, what their recoupment balance is, and what was paid versus what is being withheld. Every data point is timestamped and immutable. If they see a discrepancy, they have a cryptographically verifiable record to present -- not a complaint, but evidence.

This does not eliminate all disputes. The artist might still disagree about whether a particular deduction is contractually justified. They might challenge the stream count itself (which is still reported by the DSP). But the information asymmetry is substantially reduced. The artist does not need to pay for an audit to see their own data. The label cannot retroactively alter the records. The playing field is not leveled -- the contractual power asymmetry remains -- but the informational playing field moves significantly closer to even.

**The audience for this is not just signed artists.** Independent artists distributing through platforms like DistroKid, TuneCore, or CD Baby also face accounting opacity, though at lower stakes. A verifiable accounting layer could serve the entire distribution chain -- from DSP to distributor to artist -- providing transparency at every step. The independent artist market is also the market most likely to adopt new infrastructure, because independent artists are not bound by major label contracts that resist change.

> **Hypothesis:** On-chain royalty audit trails would significantly reduce the cost and increase the effectiveness of royalty auditing, benefiting artists who currently lack the resources to audit.
>
> **Falsification condition:** Two conditions would invalidate this advantage. First, if labels refuse to participate in on-chain accounting (which they almost certainly would, at least initially), the system only works for independent releases -- where the trust problem is smaller because the artist controls the distribution. The advantage is largest precisely where adoption is hardest. Second, if the oracle problem is unsolvable -- if getting accurate stream counts, applicable rates, and deduction categories into the smart contract requires trusting a centralized data source -- then the on-chain audit trail verifies the math but not the inputs. This is still an improvement (you can catch arithmetic errors and unauthorized split changes), but it is a smaller improvement than the full vision implies.

**Verdict: PASSES the technical filter, with significant deployment caveats.** The advantage is genuine and directly addresses a documented trust problem. But the adoption barrier is severe: the entities that would most benefit from opacity (major labels) are the entities that would need to adopt the system. This is a case where the technology passes the technical filter but may fail the political filter.

### Application 3: Royalty Cascading for Derivative Works

**The problem.** When a song samples another song, the original rights holder receives a royalty from the derivative work. When a third song samples the derivative work, the original rights holder should receive a share of that third song's royalties too -- a cascade. When the chain extends further (a sample of a sample of a sample), tracking and distributing these cascading royalties becomes exponentially complex. Traditional systems handle this through contractual agreements between pairs of parties, which become unwieldy and error-prone as the chain lengthens.

**The distributed systems advantage.** Smart contracts can encode royalty chains that cascade automatically. If Song C samples Song B, which sampled Song A, the smart contract for Song C can be programmed to route a percentage to Song B's contract, which in turn routes a sub-percentage to Song A's rights holders. The math is deterministic and executes without human intervention. Adding a new link in the chain -- Song D sampling Song C -- extends the cascade without modifying any existing contract.

This is technically elegant. The composability of smart contracts -- the ability for one contract to interact with another -- maps naturally onto the problem of cascading royalties across chains of derivative works.

**Why this is a trust problem.** Each party in the chain must trust every downstream party to accurately track and remit cascading royalties. In traditional systems, this trust is often unverified -- the sampling artist may not even know about subsequent samples of their derivative work. An on-chain system makes the entire chain visible and auditable.

**Why a centralized database cannot fully replicate this.** A centralized database could track cascading royalties, but it would require every party in the chain to use the same system -- a coordination requirement that becomes increasingly difficult as the chain extends across labels, publishers, territories, and time periods. Smart contracts that interact across a shared protocol achieve this without requiring all parties to use the same centralized service.

**Evidence.** This application has been described in the literature but has limited real-world deployment at scale. The technical feasibility is well-established -- smart contract composability is a mature pattern. The practical challenge is that most valuable catalog (the recordings most likely to be sampled) is controlled by major labels, which have not opted into any on-chain system.

> **Hypothesis:** Smart contract-based royalty cascading would more accurately and efficiently track multi-layer derivative work royalties than traditional contractual mechanisms.
>
> **Falsification condition:** If the chain of derivative works is short in practice (most sampling is one level deep, rarely two, almost never three or more), then the cascading advantage is solving a problem that rarely occurs. The elegance of the solution does not matter if the problem is uncommon. Additionally, if the sample clearance economy is shrinking due to interpolation replacing sampling (as documented in Report 4) and AI-generated alternatives emerging (Report 5), the use case may be diminishing rather than growing.

**Verdict: PASSES the technical filter, but with narrow applicability.** The advantage is genuine and technically elegant. Its practical significance depends on the frequency of multi-layer sampling chains, which is limited. This is a real but niche application.

### Application 4: Multi-Party Write Access for Rights Registries

**The problem.** The music rights ecosystem involves hundreds of thousands of publishers, labels, PROs, CMOs, and DSPs across 200-plus countries. No single entity is trusted by all parties to maintain the canonical database of who owns what. Each organization maintains its own registry, creating fragmentation, duplication, and conflicts.

**The distributed systems advantage.** A shared ledger where multiple parties can write and validate entries -- with consensus rules preventing conflicting claims from being simultaneously accepted -- has a structural advantage over asking everyone to submit data to one party's database. No single entity controls the registry. Entries are validated by consensus rather than fiat. The registry is neutral infrastructure rather than a controlled resource.

**Why this is (partly) a trust problem.** Major publishers benefit from opacity, as documented throughout this series. They may not trust a registry controlled by a competitor or by DSPs. A neutral, decentralized registry that no single entity controls addresses this trust concern.

**But also (mostly) a coordination problem.** The reason there is no single global rights database is political and economic, not technical. Building the technology is the easy part. Getting Universal, Sony, Warner, thousands of independent publishers, hundreds of CMOs, and dozens of DSPs to actually use it is the hard part. And blockchain does not solve that part -- it may even make it harder, because decentralized governance is slower and more contentious than centralized decision-making.

**Evidence.** Songview -- the ASCAP-BMI joint initiative -- has reconciled over 38 million works using centralized technology. It proves that rights reconciliation is achievable when institutions cooperate. It did not require blockchain. The MLC similarly operates a centralized rights database that achieves a 90% match rate. Neither system is perfect, but both demonstrate that the bottleneck is cooperation and data quality, not database architecture.

> **Hypothesis:** A decentralized rights registry would achieve broader participation and more complete coverage than centralized alternatives because parties that distrust centralized registries would trust a neutral, decentralized one.
>
> **Falsification condition:** If the major rights holders (who control the most valuable catalog and therefore the most essential data) refuse to participate regardless of the registry's architecture -- because they benefit from the current fragmentation -- then the registry faces the same cold start problem that killed Mycelia. A rights registry with 1% of global works registered is less useful than the MLC's centralized database with 90% coverage. If adoption is determined by institutional politics rather than technical architecture, then decentralization provides no adoption advantage.

**Verdict: MARGINAL.** The distributed architecture provides a modest technical advantage (neutral multi-party write access), but the dominant challenge is governance and adoption, not technology. A well-designed centralized database with API access and audit logging would solve 90% of the same problems with far less complexity. The distributed advantage is real but may not justify the additional complexity in practice.

---

## Part 4: Where They Don't

### The Standard for Failure

For an application to fail the technical filter, one or more of the following must be true:

1. **A centralized system solves the problem better.** Not equally well -- better. Less complexity, better performance, lower cost, wider adoption.
2. **The problem is a coordination problem, not a trust problem.** Per the framework from Part 2.
3. **The claimed advantage dissolves under scrutiny.** The distributed system sounds better in a pitch deck but does not hold up when you examine the technical details, the adoption requirements, or the real-world constraints.

### Decentralized Streaming: Solving a Problem Nobody Has

**The claim.** Decentralized streaming platforms (Audius being the most prominent) distribute content via IPFS or similar protocols, eliminating dependence on centralized CDNs and giving artists direct relationships with listeners without platform intermediaries.

**Why it fails.**

**Performance.** IPFS content retrieval depends on node proximity and content popularity. Popular tracks stored on many nodes retrieve quickly. Unpopular tracks stored on few nodes -- which is the vast majority of any music catalog -- have higher latency. Centralized CDNs (Akamai, Cloudflare, AWS CloudFront) deliver sub-100-millisecond latency globally. IPFS cannot match this reliably for long-tail content. Streaming demands consistent, low-latency delivery for every track in a catalog of 100 million or more songs. This is a fundamental architectural mismatch.

**Catalog.** Audius operates as an upload platform (like SoundCloud), not a licensed catalog (like Spotify). The catalog is fundamentally different: independent and unsigned artists, not the mainstream catalog most listeners want. Getting major label content requires licensing deals -- the same legal and financial infrastructure as centralized platforms. Decentralizing the delivery mechanism does not change what content is available. The licensing relationships that determine catalog availability are entirely off-chain.

**Discovery.** Algorithmic recommendation is a core competitive advantage of centralized platforms. Spotify's Discover Weekly, Release Radar, and algorithmic playlists are trained on massive behavioral datasets -- hundreds of millions of users' listening histories, skips, saves, and playlist additions. Decentralized platforms have a fraction of this data. Less data means worse recommendations. Worse recommendations mean lower engagement. Lower engagement means artists earn less. The discovery problem compounds the catalog problem.

**The user value proposition.** For listeners, Spotify works. The app is intuitive, the catalog is comprehensive, the recommendations are personalized, and it costs $10.99 per month with no crypto knowledge required. "Decentralized" is not a feature consumers pay for. The value proposition is primarily for artists (potentially better economics), but artists follow audiences, and the audience is on centralized platforms.

**Cost redistribution, not elimination.** Decentralization does not eliminate infrastructure costs. Someone must run the nodes, store the content, serve the streams. Node operators need economic incentives, which typically come from token inflation -- creating a sustainability concern. The costs are redistributed, not reduced.

> **The problem decentralized streaming solves -- delivering music without relying on a centralized server -- is not the problem the music industry has.** The music industry's streaming problems are economic (how revenue is distributed) and structural (who has market power). Changing the delivery infrastructure addresses neither.

**The Tracklib comparison is instructive.** Tracklib solved a genuine problem -- sample clearance friction -- by building a centralized marketplace with pre-negotiated licensing terms. Its catalog of 100,000 or more songs can be cleared in minutes through a five-step online process. No blockchain. No tokens. No wallets. Just a well-designed centralized platform that eliminated friction by solving the actual problem (pre-negotiating terms with rights holders) rather than the imagined problem (database architecture). Tracklib demonstrates what effective music technology looks like: identify the real bottleneck, solve it with the simplest technology that works, and scale.

Decentralized streaming projects identified the wrong bottleneck. The bottleneck in music streaming is not centralized servers or intermediary extraction. It is catalog licensing, discovery algorithms, and user experience. Changing the delivery infrastructure is like redesigning the engine of a car that has a flat tire.

**Verdict: FAILS.** Centralized CDNs are superior for streaming delivery. The barriers to competing with Spotify are catalog, discovery, and user base -- none of which are solved by distributed architecture. This was the most well-funded application in the blockchain-plus-music space and it is the clearest failure.

### Per-Stream Real-Time Settlement: The Throughput Wall

**The claim.** Every stream triggers an on-chain royalty payment in real time. Artists see revenue from their music the moment it is played. No more waiting 12-18 months for semi-annual statements.

**Why it fails.**

The math is disqualifying. Consider the scale:

- Spotify alone has 675 million or more monthly active users.
- Average listening is approximately 114 minutes per day per user.
- At roughly 3.5 minutes per song, that is approximately 32 streams per user per day.
- Back-of-envelope: 675 million times 32 equals approximately 21.6 billion streams per day on Spotify alone.
- Add Apple Music, Amazon Music, YouTube Music, Tidal, Deezer, and others, and global daily streams likely exceed 40-50 billion.

If every stream triggered an on-chain royalty transaction, you would need approximately 250,000 to 500,000 transactions per second dedicated exclusively to music royalties. The best current blockchain throughput:

| Chain | Theoretical TPS | Sufficient for Per-Stream Settlement? |
|-------|----------------|--------------------------------------|
| Ethereum L1 | ~25-35 | No |
| Polygon | ~7,000-10,000 | No |
| Solana | ~65,000 (theoretical) | No |

The gap is three to four orders of magnitude. No existing blockchain -- and no blockchain on any credible near-term roadmap -- can process per-stream royalty transactions for the global music industry. The physics of consensus mechanisms impose fundamental throughput limits that are not solved by "just scaling."

This is not a temporary limitation. It is an architectural constraint. Consensus-based systems inherently trade throughput for decentralization and security. Per-stream settlement at music industry scale would require abandoning enough decentralization that the result is functionally a centralized database with extra steps.

Part 5 addresses the throughput constraint in full detail and identifies what IS feasible (batch settlement).

**Verdict: FAILS.** The throughput gap is insurmountable for per-stream settlement. Batch settlement (monthly or even weekly) is feasible and is addressed in Part 5.

### Metadata and Data Quality: Immutable Garbage

**The claim.** Putting music metadata on a blockchain creates an immutable, authoritative record of who wrote, performed, and owns every song. No more conflicting databases. No more lost metadata. No more black box royalties.

**Why it fails.**

**The metadata crisis is an input problem, not a database problem.** The MLC's matching challenges -- the $426.9 million in historical unmatched royalties, the ongoing 10% unmatched rate -- exist because:

- Songs are uploaded to DSPs without complete metadata.
- Artists and distributors frequently enter incorrect metadata (typos, inconsistent name spellings, missing co-writer credits).
- There is no mandatory link between ISRCs and ISWCs at the point of distribution.
- Works are never registered in the first place.

A blockchain does not fix any of these problems. It makes some of them worse.

**Immutability is a liability for data quality.** When metadata is wrong in a traditional database, you can correct it. When metadata is wrong on a blockchain, you have an immutable record of wrong data. Yes, you can append corrections -- but the original error persists on-chain, creating confusion about which version is authoritative. The music industry, with its high rate of metadata errors, needs a system that makes correction easy, not one that makes correction architecturally difficult.

**Validation at write time helps but does not solve the core problem.** A smart contract could reject registrations where claimed ownership shares exceed 100% -- a genuinely useful validation rule. But it cannot validate whether the people claiming those shares are the actual rights holders. It cannot verify that the ISRC is correctly assigned. It cannot check whether the songwriter credits are complete. These require human judgment and access to information outside the blockchain.

**The industry needs better data entry, not better databases.** The DDEX standard already exists as an industry-standard XML schema for communicating metadata between trading partners. The bottleneck is not technology -- it is adoption and enforcement. Making every distributor, every label, and every self-releasing artist enter complete, correct metadata at the point of upload is a governance problem. Changing the database that stores the metadata does not change the metadata.

> **Garbage in, immutable garbage out.** Blockchain makes the music industry's data quality problem harder to fix, not easier.

**A concrete example.** Consider a common scenario: two songwriters co-write a song. Writer A registers the work with ASCAP, claiming 50% of the publishing. Writer B registers the same work with BMI, also claiming 50%. So far, so good -- the shares add up to 100%. But Writer A's publisher later assigns a portion of A's share to a sub-publisher for European territories. The sub-publisher registers the work with PRS for Music in the UK, claiming 25%. Now the total registered claims are 125% of the work. Each registration was made in good faith by a legitimate party. The conflict exists because the registrations happened in different systems with no cross-referencing.

Would a blockchain prevent this? Only if all three registrations happened on the same ledger and the ledger rejected the third registration because it pushed the total above 100%. But this requires all three organizations (ASCAP, BMI, PRS) to use the same blockchain -- which is the coordination problem. The blockchain does not create the coordination. The coordination must exist first, and once it exists, the blockchain adds little that a shared centralized database with the same validation rule would not provide.

**The correction problem is severe.** In the example above, suppose Writer A discovers that the sub-publisher's registration is incorrect -- the sub-publishing deal expired, or the territory was wrong. In a traditional database, the correction is a database update. On a blockchain, the original incorrect entry is immutable. A correction must be appended as a new transaction, creating a history where both the incorrect and correct entries exist. Any system querying the blockchain must know to use the latest entry, not the original. For a system that processes millions of queries per day (as a royalty distribution system would), this overhead is non-trivial.

**Verdict: FAILS.** The metadata problem is a coordination and data quality problem. Blockchain is the wrong tool. Centralized systems with good validation rules and easy correction mechanisms are better suited to this challenge.

### Section 203 Termination Tracking: Useful but Not Blockchain-Dependent

Before proceeding to the cold start problem, one specific application deserves mention because it is frequently cited as a blockchain use case for music: tracking Section 203 termination rights.

Under 17 U.S.C. Section 203, as documented in Report 3, authors can terminate copyright transfers 35 years after execution. This is an inalienable right -- agreements to the contrary are void. Many artists and their heirs are unaware of termination rights or miss the window.

A smart contract could record the grant date immutably, automatically flag when the termination window opens, and potentially automate notification. This is genuinely useful. But it does not require a blockchain. Conventional databases with cryptographic timestamps (RFC 3161) provide the same immutability guarantee for date recording. Calendar-based notifications are trivial in any software system. The "smart contract" in this case is doing work that a Google Calendar reminder could do.

The application is useful. The distributed architecture is unnecessary for it. This is a pattern that recurs throughout the blockchain-plus-music space: the application has merit, but the blockchain is an unnecessary layer of complexity. When evaluating any proposed use case, the honest question is not "could a blockchain do this?" but "does a blockchain do this better than the alternatives?" For termination tracking, the answer is no.

### Rights Registry Adoption: The Cold Start Problem

**The claim.** A decentralized rights registry would provide a single, neutral, authoritative source for music ownership information, eliminating the fragmentation across PROs, CMOs, labels, and publishers.

**Why it fails (as currently conceived).**

**The cold start problem is decisive.** A rights registry is only as valuable as the percentage of global works it contains. Songview reconciles 38 million or more works. The MLC has 90% match rates for ongoing royalties. A blockchain-based registry starting from zero must achieve comparable coverage to be useful. The history of attempts to build new registries -- from Mycelia's Creative Passport to various industry initiatives -- shows that achieving coverage is orders of magnitude harder than building the technology.

**Incumbents benefit from opacity.** This was documented in Report 2 and throughout the series. When metadata errors cause royalties to go into "black box" holding accounts, those funds are typically distributed to major rights holders on a market-share basis. Metadata errors systematically transfer money from independent artists to major labels. The entities that control the most valuable catalog -- and therefore the most essential data for any registry -- are the same entities that benefit from the current system's opacity. They have limited economic incentive to participate in a transparent registry, regardless of whether it is centralized or decentralized.

**Technology is not the barrier.** If Universal, Sony, and Warner collectively decided tomorrow to share their rights data with a centralized database, the technology to build that database exists and is well-understood. They have not made that decision because it is not in their interest, not because the technology is insufficient. Changing the database architecture from centralized to decentralized does not change their incentive calculation.

**The Mycelia lesson applies here with full force.** Imogen Heap's Creative Passport was a rights registry initiative led by one of the most respected artists in the industry, with genuine technical merit and no speculative token. It could not achieve network effects. The barrier was not technology, credibility, or design. It was the simple reality that a voluntary registry without institutional mandates cannot reach critical mass. The music industry has hundreds of thousands of active rights holders. Getting even 10% of them to register their works on a new platform requires either a compelling economic incentive (money they would not otherwise receive) or a mandate (regulatory or contractual requirement to participate). The Creative Passport offered neither.

A blockchain-based rights registry faces the same adoption dynamics regardless of its technical architecture. Whether the database is centralized, distributed, permissioned, or permissionless, the question that determines success is: why would Universal, Sony, and Warner populate it? If the answer requires them to accept reduced information asymmetry (which reduces their negotiating leverage), the technical architecture is irrelevant to the adoption decision.

**Verdict: FAILS -- but the failure is political, not technical.** The distributed architecture offers a modest technical advantage (neutral multi-party write access), as noted in Part 3. But the dominant barrier to a unified rights registry is institutional willingness to participate, which is determined by power dynamics and economic incentives, not by database architecture. A decentralized registry that the major rights holders refuse to populate is less useful than a centralized one they participate in.

### Legal Jurisdiction: Smart Contracts Cannot Choose a Country's Law

**The claim.** Smart contracts can automate music licensing across borders, eliminating the complexity of territorial copyright law.

**Why it fails.**

**Copyright is territorial.** A song has different rights holders, different royalty rates, and different legal frameworks in every country. Copyright law is national, not global. A smart contract that encodes royalty splits for the US market does not govern what happens when the same song streams in Germany, Japan, or Brazil. Each territory has its own collecting societies, its own rate structures, and its own legal requirements.

**Smart contracts are not legally binding agreements for music licensing in most jurisdictions.** The legal status of smart contracts varies widely by jurisdiction. A smart contract that executes a royalty payment does not constitute a legally recognized license in any jurisdiction that requires written agreements, specific terms, or regulatory compliance. The legal infrastructure of music licensing -- negotiated agreements, territorial limitations, blanket licenses, compulsory licenses -- operates in a legal framework that smart contracts cannot unilaterally replace.

**Dispute resolution requires human judgment.** When rights holders in different countries claim conflicting ownership of the same work, no smart contract can adjudicate. The dispute requires understanding of each country's copyright law, the specific contractual relationships involved, and often a judicial proceeding. Blockchain's trustless consensus mechanism has no mechanism for legal judgment.

**Regulations vary by jurisdiction.** Music tokenization regulations "vary widely by jurisdiction, with some regions adopting proactive frameworks and others lagging behind, often leading to a patchwork of rules." A globally deployed smart contract system must comply with the laws of every jurisdiction in which it operates -- a compliance burden that is arguably greater than the compliance burden of traditional licensing.

**An illustrative example.** Consider a song written by an American songwriter, recorded by a British artist, sampled by a Japanese producer, and streamed on Spotify in Brazil. The mechanical royalty rate, the applicable performing rights organization, the sample clearance requirements, and the enforcement mechanisms are all different in each country. The songwriter's share is administered by ASCAP in the US, PRS in the UK, JASRAC in Japan, and ECAD in Brazil. Each organization has its own rules, its own rates, and its own reporting requirements. A smart contract that encodes the split percentages cannot know which country's rates apply to which stream without a territory-aware data feed -- which is itself a complex system that requires cooperation from DSPs, CMOs, and rights holders across multiple jurisdictions.

The vision of "one smart contract that handles global music royalties" fundamentally misunderstands the legal architecture of international copyright. Copyright is not one system. It is approximately 200 systems, each with its own rules, each with its own enforcement mechanisms, and each with its own political dynamics. No protocol can unify what legislation has kept separate.

**Verdict: FAILS.** International copyright law is inherently territorial and requires human legal judgment. Smart contracts can automate payments within a single legal framework but cannot resolve cross-jurisdictional complexity.

### Label Services: What Technology Cannot Replace

**The claim.** Decentralized platforms can replace label services, allowing artists to operate independently with blockchain-based infrastructure.

**Why it fails.**

Labels provide marketing, radio promotion, playlist pitching, sync licensing relationships, tour support, brand partnerships, and strategic career guidance. These are human-intensive, relationship-driven services. An artist on a decentralized platform with no label support faces the same discovery problem as an artist on SoundCloud -- their music exists, but nobody knows about it.

Report 5 documented the case studies in detail. Artists who have succeeded independently -- Chance the Rapper, Macklemore, Nipsey Hussle, Russ -- did so through extraordinary personal hustle, pre-existing audiences, and strategic use of social media. They did not need a blockchain. They needed marketing acumen, audience development skills, and relentless work.

No technology, centralized or decentralized, can replicate the phone call where a label executive pitches a song to a Spotify playlist editor, or the relationship that gets a track placed in a television show, or the strategic planning that coordinates an album rollout across DSPs, radio, social media, press, and live events. These are fundamentally human activities. Blockchain cannot automate them because they are not computational problems.

**Verdict: FAILS.** Label services are human-intensive and relationship-driven. Technology can augment them but cannot replace them. This is not a database architecture problem.

---

## Part 5: The Throughput Constraint

### The Fundamental Math

This section quantifies the throughput constraint that determines what blockchain architectures can and cannot do for the music industry. The math is straightforward. The conclusions are binding.

**Global streaming volume.**

Spotify, the largest streaming platform, has 675 million or more monthly active users as of 2025-2026. Average listening time is approximately 114 minutes per day per user. At roughly 3.5 minutes per song, this is approximately 32 streams per user per day. Multiplying: 675 million times 32 equals approximately 21.6 billion streams per day on Spotify alone.

Spotify has approximately 37% global market share for music streaming. Extrapolating from Spotify's volume, total global daily streams are approximately 40-50 billion. This is a back-of-envelope estimate -- Spotify does not publicly disclose total daily stream counts -- but it is directionally sound.

The daily stream estimate used for throughput calculations: **approximately 40-50 billion streams per day globally.**

### Scenario 1: Per-Stream On-Chain Settlement

If every stream triggers an on-chain transaction:

- 40 billion streams per day / 86,400 seconds per day = approximately **463,000 TPS** required.
- At 50 billion streams per day: approximately **579,000 TPS** required.

Current blockchain throughput:

| Chain | Theoretical Max TPS | Percentage of Required Throughput |
|-------|-------------------|-----------------------------------|
| Ethereum L1 | ~25-35 | 0.005-0.008% |
| Polygon | ~7,000-10,000 | 1.5-2.2% |
| Solana | ~65,000 (theoretical) | 11.2-14.0% |

Even Solana, the highest-throughput major blockchain, can handle roughly 11-14% of the required transactions -- and that is its theoretical maximum, not its sustained real-world throughput, and it would mean dedicating the entire chain exclusively to music royalty transactions with no capacity for any other use.

> **Per-stream on-chain settlement is physically impossible on any current or near-term blockchain.** The gap is not 2x or 5x. It is 7x to 23,000x, depending on the chain. This is not a scaling problem that will be solved by the next protocol upgrade. It is a fundamental constraint of consensus-based systems.

### Scenario 2: Batch Monthly Settlement

The picture changes radically when we shift from per-stream to batch settlement.

Instead of settling every individual stream on-chain, aggregate all streams for each track over a settlement period (weekly or monthly) and settle the net royalty amounts.

- Approximately **40 million tracks** are available on major streaming platforms.
- Monthly settlement for each track requires approximately 40 million transactions per month.
- 40 million transactions / 30 days / 86,400 seconds = approximately **15 TPS**.

Fifteen transactions per second. This is comfortably within the capacity of every major blockchain, including Ethereum L1.

| Chain | TPS Capacity | Can Handle 15 TPS? |
|-------|-------------|-------------------|
| Ethereum L1 | ~25-35 | Yes |
| Polygon | ~7,000-10,000 | Yes (with massive headroom) |
| Solana | ~65,000 (theoretical) | Yes (with massive headroom) |

Even accounting for burst periods (not all settlements would be evenly distributed across the month), the throughput requirement is orders of magnitude below what modern chains can handle. Monthly batch settlement is technically trivial from a throughput perspective.

Weekly settlement doubles the TPS to approximately 30 -- still trivial. Daily batch settlement (approximately 460 TPS) is feasible on L2s and Solana but would strain Ethereum L1 if combined with other network traffic.

### Scenario 3: The Honest Architecture

The throughput math points to a specific architectural pattern, one that is well-understood in distributed systems design but rarely discussed in the blockchain-plus-music literature because it is less exciting than the "real-time per-stream settlement" pitch.

**Off-chain computation with on-chain settlement proofs.**

The architecture:

1. **Off-chain computation layer.** DSPs report streaming data to an off-chain computation system (a traditional server, a computation network, or a trusted intermediary). This system aggregates streams, calculates royalties per the agreed split percentages, and computes the net amounts owed to each rights holder for the settlement period.

2. **Proof generation.** The computation system generates a cryptographic proof (a Merkle root, a zero-knowledge proof, or a signed attestation) that commits to the computed royalties. This proof is compact -- a single hash or proof that represents millions of individual calculations.

3. **On-chain settlement.** The proof is posted on-chain. Smart contracts verify the proof and execute the settlement -- distributing funds to each rights holder's address according to the committed amounts. Alternatively, the proof is stored on-chain as an audit trail, and funds are distributed through traditional channels with the on-chain record serving as the verifiable receipt.

4. **Dispute mechanism.** If any party disputes the computed royalties, they can request the underlying data from the off-chain computation layer and verify the calculations against the on-chain proof. If the proof does not match the data, the dispute is cryptographically verifiable.

This is the architecture that actually works. It is also the architecture that is least interesting to pitch to venture capitalists, because it means you are not "putting music on the blockchain" -- you are building a conventional computation system with a blockchain-based audit and settlement layer. The value proposition is narrower but real: verifiable, tamper-proof settlement records and automated royalty distribution, without pretending that the blockchain can handle the computation itself.

**The trust model of this architecture deserves explicit analysis.** Off-chain computation with on-chain settlement introduces a new trust assumption: you must trust the off-chain computation layer. If the off-chain system misreports stream counts or miscalculates royalties, the on-chain settlement faithfully executes the wrong numbers. The blockchain enforces what it is told; it does not verify the truth of the inputs.

This is the oracle problem -- one of the most studied and persistent challenges in distributed systems design. For music royalties, the oracle problem is particularly acute because the data source (the DSP) is also the entity whose costs are determined by the data. This creates a structural incentive problem that the architecture must address through either cryptographic proofs (the DSP proves the correctness of its stream counts without revealing proprietary data), independent auditing (third parties verify the DSP's reported numbers), or reputation and legal incentives (DSPs that misreport face contractual and reputational consequences, as they do today).

None of these solutions is novel to blockchain. All exist in the current system in some form. What the on-chain settlement layer adds is an immutable record of what was claimed and what was paid -- a record that makes disputes more tractable because neither party can retroactively alter their claims. This is valuable. It is not revolutionary. And it is important to be honest about exactly how much value it adds rather than overselling the architecture.

> **The BitTorrent insight applied to music: decentralize the bottleneck, not the whole system.** BitTorrent did not decentralize video editing or content creation. It decentralized file distribution -- the specific bottleneck that centralized servers could not handle efficiently for large files. In music, the bottleneck is not streaming delivery (CDNs handle this well) or metadata management (a coordination problem). The bottleneck is trustworthy settlement -- ensuring that the right money reaches the right people. That is the narrow layer worth decentralizing.

### The Cost Constraint

Throughput is one constraint. Cost is another. Even if a chain can handle the required TPS, the per-transaction cost must be low enough to justify on-chain settlement.

**Monthly batch settlement cost comparison (40 million transactions):**

| Chain | Cost Per Transaction | Monthly Cost (40M txns) | Feasible? |
|-------|---------------------|------------------------|-----------|
| Ethereum L1 | $1-$50 (highly variable) | $40M-$2B | No |
| Polygon | <$0.01 | <$400K | Yes |
| Solana | ~$0.00025 | ~$10K | Yes |

Ethereum L1 is economically infeasible for batch settlement at music industry scale. Gas fees that fluctuate between $1 and $50 per transaction translate to monthly costs that exceed the total royalty pools of many artists.

Polygon and Solana are both economically feasible. Solana's cost advantage is approximately 40:1 over Polygon for this use case. At $10,000 per month, Solana-based batch settlement is a rounding error in the context of an industry that generates over $29 billion in annual revenue.

### What This Means

The throughput and cost analysis narrows the design space considerably:

1. **Per-stream real-time settlement is impossible.** Strike it from the design.
2. **Batch settlement (monthly or weekly) is feasible and cheap.** On Polygon or Solana.
3. **The architecture is off-chain computation with on-chain settlement.** Not "music on the blockchain." A blockchain-based accounting and settlement layer for a music industry that continues to operate on conventional infrastructure.
4. **You are not replacing Spotify's infrastructure.** You are replacing the accounting layer between Spotify and the rights holders. Spotify continues to handle streaming, discovery, and user experience. The blockchain handles settlement proofs and royalty distribution.
5. **Ethereum L1 is out.** For anything at music industry scale, L2s or alternative L1s are required.

This is less exciting than the pitch. It is also the only architecture that works.

---

## Part 6: The Technical Filter -- What Passes

### The Filter

Parts 1 through 5 established the diagnostic framework, cataloged the failures, distinguished coordination from trust problems, evaluated specific applications, and quantified the throughput and cost constraints. This section synthesizes the analysis into a clear filter -- a determination of which music industry applications have genuine distributed systems advantages and which do not.

The filter operates on three tiers:

**PASSES.** The distributed architecture provides something a centralized database structurally cannot. The problem is a trust problem, not a coordination problem. The application does not depend on a speculative token. The throughput and cost constraints are satisfied.

**FAILS.** A centralized system solves the problem better, or the problem is a coordination problem, or the claimed advantage dissolves under scrutiny. Building this on a blockchain adds complexity without adding capability.

**MARGINAL.** The distributed architecture provides a modest advantage, but the additional complexity may not be justified. Could go either way depending on implementation details and adoption dynamics.

### What Passes

| Application | Trust/Coordination | Distributed Advantage | Throughput Feasible | Token Required? | Verdict |
|-------------|-------------------|----------------------|--------------------|-----------------| --------|
| Automated royalty splits | Trust | Verifiable, tamper-proof splits | Yes (batch) | No | **PASSES** |
| Verifiable royalty accounting | Trust | Independent audit trail | Yes (batch) | No | **PASSES** |
| Royalty cascading (derivatives) | Trust | Composable smart contracts | Yes (batch) | No | **PASSES** (narrow) |
| Multi-party rights registry | Mixed | Neutral write access | Yes | No | **MARGINAL** |
| Decentralized streaming | Neither | None meaningful | N/A | Typically yes | **FAILS** |
| Per-stream real-time settlement | Trust | N/A (throughput impossible) | No | No | **FAILS** |
| Metadata / data quality | Coordination | Negative (immutability harms) | N/A | No | **FAILS** |
| Rights registry adoption | Coordination | None (political problem) | N/A | No | **FAILS** |
| Legal jurisdiction | Coordination | None | N/A | No | **FAILS** |
| Label services | Neither | None | N/A | No | **FAILS** |

### The Three That Pass

**1. Automated royalty splits via smart contracts.** This is the strongest case. The split percentages are encoded in code. The calculation is deterministic and verifiable. No party can unilaterally alter the splits. Every payment is on-chain and auditable. The advantage over centralized systems is genuine: the payee can independently verify the math without trusting the payer's accounting. Batch settlement at monthly or weekly intervals is feasible on Polygon or Solana at negligible cost. This does not require a speculative token. It requires a smart contract and a settlement layer.

**2. Verifiable royalty accounting and audit trails.** This directly addresses a documented trust problem -- the 95% error rate in audited royalty statements, the 12-18 month payment lag, the opaque recoupment calculations. [single-source on 95% figure -- Royalty Review Council] An on-chain audit trail provides something a label-controlled dashboard cannot: verification independent of the entity being audited. The challenge is adoption -- the entities that benefit from opacity are the entities that would need to participate. But the technical advantage is real.

**3. Royalty cascading for derivative works.** Smart contract composability maps elegantly onto the problem of cascading royalties through chains of derivative works. The advantage is genuine but narrow -- most sampling is one level deep, limiting the practical frequency of the use case. Still, for the cases where it applies, the distributed solution is technically superior to managing cascading royalties through pairwise contractual agreements.

### The One That Is Marginal

**Multi-party rights registry.** A decentralized registry offers neutral multi-party write access -- no single entity controls the database. This is a genuine architectural advantage in a landscape where no organization is trusted by all parties. But the dominant challenges are governance (who sets the rules?), adoption (will major rights holders participate?), and data quality (garbage in, immutable garbage out). A well-designed centralized database with API access and audit logging provides 90% of the same benefit with significantly less complexity. The marginal advantage of decentralization may or may not justify the additional cost and complexity.

### The Six That Fail

Decentralized streaming, per-stream real-time settlement, metadata and data quality, rights registry adoption, legal jurisdiction, and label services all fail the technical filter -- for reasons documented in Parts 4 and 5. The failures are not technical limitations that will be overcome by better blockchain technology. They are fundamental mismatches between the tool (trustless, permissionless, decentralized protocols) and the problem (coordination, governance, human judgment, and throughput constraints).

### The Surviving Architecture

What emerges from the filter is a specific, narrow, and actionable architecture:

**Layer 1: Off-chain computation.** DSPs report streaming data. A computation layer aggregates streams, calculates royalties per agreed split percentages, and computes settlement amounts. This layer is conventional software -- servers, databases, APIs. It is where the volume lives.

**Layer 2: On-chain settlement and audit.** Settlement proofs are posted on-chain. Smart contracts verify proofs and distribute funds. Every royalty calculation and payment is recorded as a verifiable, immutable audit trail. Artists can independently verify their payments without trusting any intermediary.

**Layer 3: Smart contract royalty logic.** Split percentages, cascading rules, and recoupment calculations are encoded in smart contracts. Changes require multi-party approval. The logic is transparent and auditable.

This is not a decentralized music platform. It is not "music on the blockchain." It is a blockchain-based accounting and settlement layer for an industry that continues to operate on conventional infrastructure. The streaming stays centralized. The discovery algorithms stay centralized. The catalog licensing stays centralized. What moves on-chain is the settlement -- the narrow layer where transparency, verifiability, and tamper-proof audit trails provide genuine value.

This is the BitTorrent principle applied correctly. BitTorrent did not decentralize video production or film criticism. It decentralized file distribution -- the specific operation where decentralization provided a structural advantage. The music industry's decentralization opportunity is not streaming or metadata or licensing. It is settlement. That is the bottleneck where trust is lacking, where errors are endemic, where the power asymmetry between labels and artists is most directly expressed in dollars, and where a protocol can provide something that a centralized system structurally cannot.

### What the Filter Reveals About the Industry

The technical filter, applied rigorously, tells us something not just about distributed systems but about the music industry itself.

**The industry's problems are heterogeneous.** The blockchain-plus-music pitch treated "the music industry's problems" as a monolith -- as though a single technology could address everything from metadata quality to artist compensation to label power asymmetry. The filter reveals that these are fundamentally different types of problems requiring fundamentally different solutions. Metadata quality is a coordination and data governance problem. Artist compensation is partly a trust problem (opaque accounting) and partly a structural power problem (market concentration, contractual leverage). Label power asymmetry is a market structure problem that no technology, distributed or otherwise, can address directly.

**The problems worth solving with distributed systems are the least visible.** The exciting applications -- decentralized streaming, music NFTs, tokenized fan ownership -- all fail the filter. The applications that pass -- automated royalty splits, verifiable audit trails, batch settlement proofs -- are infrastructure. They are unglamorous. They do not make good pitch decks. They do not generate viral marketing. But they address real, documented trust failures that cost artists real money.

This is the BitTorrent pattern again. BitTorrent was not exciting. It did not have a consumer brand. Most people who used BitTorrent did not know or care how it worked. But it solved a genuine technical problem -- distributing large files -- better than anything else available. The technology was invisible. The utility was real.

**The power structure problem remains.** Even if every application that passes the filter were deployed at scale tomorrow, the fundamental power dynamics documented in Reports 1 through 5 would remain largely intact. Major labels would still control approximately 68.7% of recorded music revenue. Copyright law would still favor incumbents. The sample clearance system would still function as a gatekeeping mechanism. Verifiable royalty accounting would make it harder for labels to underpay artists on the margin, but it would not change the contractual terms under which royalties are calculated in the first place. A smart contract that faithfully executes a bad deal is still a bad deal.

This is not an argument against building the applications that pass the filter. Reducing royalty errors, increasing transparency, and automating splits are genuine improvements that would benefit artists. But it is an argument for intellectual honesty about the scope of what distributed systems can accomplish. They can fix specific trust failures in the settlement layer. They cannot fix the structural power imbalance that determines who sets the terms in the first place. That requires collective action, legal reform, and market competition -- none of which are technological problems.

### The Transition to Report 8

This report established the diagnostic. Every claim about distributed systems advantages has been tested against the coordination-versus-trust framework, evaluated for throughput and cost feasibility, and assessed against the BitTorrent standard of genuine technical superiority.

Three applications passed the filter. One is marginal. Six failed. The surviving applications point to a specific architecture: off-chain computation, on-chain settlement, smart contract royalty logic.

Report 8 will design the protocol. It will specify a three-layer system -- Rights Registry, Settlement, and Attestation -- built around the applications that survived this filter. It will detail the technical architecture, the governance model, the incentive design, and the migration path. It will not reargue the cases made here. It will build on them.

Report 9 will attack the protocol. It will stress-test every assumption, identify every failure mode, and determine whether the design survives adversarial conditions -- including the most likely adversary of all: an industry that benefits from the status quo and has every incentive to resist change.

Now that we know what is worth building, the question becomes how to build it.

---

## Appendix A: Project Scorecard

| Project | Founded | Status (2026) | Problem Claimed | Problem Solved? | Money Raised | Value Created for Artists | Key Failure Pattern |
|---------|---------|---------------|-----------------|-----------------|-------------|--------------------------|---------------------|
| Audius | 2018 | Operating (disputed metrics) | Decentralized streaming, 90% artist revenue | No (no per-stream pay; AUDIO token -99.6%) | $12M+ | Negligible (~$2/week to top 5 trending) | Solving the wrong problem |
| Royal | 2021 | Pivoted (marketplace sunset Apr 2024) | Fractional song ownership, fan royalties | No ($156K total royalties distributed) | $71M | $156K total across all collectors | Token economics as real product |
| Sound.xyz | 2021 | Operating (no public metrics) | Music NFTs, direct fan economics | Unproven (no data) | $25M | Unknown | Built on speculative substrate |
| Ujo Music | 2015 | Dead (2019) | Smart contract royalties, direct sales | No ($133.20 total revenue from flagship) | ConsenSys-funded | $133.20 | UX gap |
| Mycelia | 2015 | Unclear (no recent updates) | Creative Passport, universal metadata | No (could not achieve network effects) | Grants/self-funded | Concept only | Coordination problem without coordination power |
| Mediachain | 2016 | Acqui-hired by Spotify (2017) | Decentralized metadata attribution | No (blockchain tech shelved by Spotify) | Undisclosed | None via blockchain | Technology not needed for the actual problem |
| Choon | 2018 | Dead (Dec 2019) | Pay-per-stream in NOTES tokens | No (tokens worthless; Emanate swap denied) | Unknown | Lost to token collapse | Token dependency |
| Musicoin | 2017 | Dead (network non-functional) | PoW blockchain for music streaming | No (miners left when unprofitable) | Unknown | Lost to network death | Token dependency |
| Opulous | 2021 | Operating (limited public data) | DeFi loans against streaming royalties | TBD | Unknown | Unknown | -- |

**Conservative aggregate:** Over $100 million in venture capital invested. Documented value created for artists: $156,133.20.

---

## Appendix B: Throughput Calculations

### Key Assumptions

- Global daily streams: ~40-50 billion (derived from Spotify's ~21.6 billion daily streams at ~37% market share)
- Spotify daily stream estimate: 675M MAU x 32 streams/user/day = ~21.6 billion
- Tracks on major streaming platforms: ~40 million
- Seconds per day: 86,400

### Per-Stream Settlement (Infeasible)

| Metric | Value |
|--------|-------|
| Daily global streams (low estimate) | 40 billion |
| Daily global streams (high estimate) | 50 billion |
| Required TPS (low) | ~463,000 |
| Required TPS (high) | ~579,000 |
| Ethereum L1 TPS | ~25-35 |
| Polygon TPS | ~7,000-10,000 |
| Solana TPS (theoretical) | ~65,000 |
| Gap: Ethereum vs. required | ~13,000x-23,000x |
| Gap: Polygon vs. required | ~46x-83x |
| Gap: Solana vs. required | ~7x-9x |

### Batch Monthly Settlement (Feasible)

| Metric | Value |
|--------|-------|
| Tracks requiring settlement | ~40 million |
| Settlement frequency | Monthly |
| Transactions per month | ~40 million |
| Required TPS (averaged across month) | ~15 |
| Required TPS (weekly batch) | ~66 |
| Required TPS (daily batch) | ~463 |
| Ethereum L1 capacity | Sufficient for monthly/weekly |
| Polygon/Solana capacity | Sufficient for any frequency |

### Key Insight

The difference between per-stream and monthly batch settlement is approximately 30,000x in required TPS. Per-stream is infeasible on any current chain. Monthly batch is trivial on any chain. The architecture is determined by this math.

---

## Appendix C: Batch Settlement Cost Comparison

### Monthly Settlement: 40 Million Transactions

| Chain | Cost Per Transaction | Monthly Cost | Annual Cost | Feasible? |
|-------|---------------------|-------------|-------------|-----------|
| Ethereum L1 | $1-$50 (variable) | $40M-$2B | $480M-$24B | No |
| Polygon | <$0.01 | <$400K | <$4.8M | Yes |
| Solana | ~$0.00025 | ~$10K | ~$120K | Yes |

### Weekly Settlement: ~160 Million Transactions/Month

| Chain | Monthly Cost | Annual Cost | Feasible? |
|-------|-------------|-------------|-----------|
| Ethereum L1 | $160M-$8B | $1.9B-$96B | No |
| Polygon | <$1.6M | <$19.2M | Marginal |
| Solana | ~$40K | ~$480K | Yes |

### Daily Settlement: ~1.2 Billion Transactions/Month

| Chain | Monthly Cost | Annual Cost | Feasible? |
|-------|-------------|-------------|-----------|
| Ethereum L1 | $1.2B-$60B | $14.4B-$720B | No |
| Polygon | <$12M | <$144M | Marginal (depends on revenue context) |
| Solana | ~$300K | ~$3.6M | Yes |

### Context

Global recorded music revenue in 2024 was approximately $29.6 billion. Settlement infrastructure costs must be evaluated against this revenue base:

- Solana monthly batch settlement: ~$10K/month = 0.0004% of annual industry revenue
- Polygon monthly batch settlement: ~$400K/month = 0.016% of annual industry revenue
- Ethereum L1 monthly batch settlement: $40M-$2B/month = infeasible

**Solana is the economically optimal chain for music industry batch settlement** at current prices, with costs that are negligible relative to industry revenue at any settlement frequency.

---

*Report 7 in the Power Structures Revealed series. Reports 1-6 established the architecture. This report established the diagnostic. Report 8 designs the protocol. Report 9 attacks it.*

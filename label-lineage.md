# Label Consolidation Lineage

Visual diagrams tracing the ownership history of the Big Three major label groups.

---

## The Path from Big Six to Big Three

```mermaid
graph TD
    subgraph "Big Six (Late 1980s)"
        WMG["Warner Music Group<br/>(Time Warner)"]
        SONY["Sony Music<br/>(CBS Records → Sony 1988)"]
        EMI_G["EMI Group"]
        POLY["PolyGram<br/>(Philips)"]
        BMG_G["BMG<br/>(Bertelsmann)"]
        MCA["MCA Music<br/>(Seagram from 1995)"]
    end

    POLY -->|"$10.4B acquisition<br/>1998"| UMG1["Universal Music Group"]
    MCA -->|"Renamed UMG<br/>1996"| UMG1

    BMG_G -->|"50-50 JV<br/>2004"| SBMG["Sony BMG"]
    SONY -->|"50-50 JV<br/>2004"| SBMG
    SBMG -->|"Sony buys out BMG<br/>$1.5B, 2008"| SONY2["Sony Music Entertainment"]

    EMI_G -->|"Terra Firma LBO<br/>$4.7B, 2007"| EMI2["EMI<br/>(Terra Firma)"]
    EMI2 -->|"Citigroup seizes<br/>2011"| EMI3["EMI<br/>(Citigroup)"]
    EMI3 -->|"Recorded music<br/>$1.9B, 2012"| UMG2["Universal Music Group"]
    EMI3 -->|"Publishing<br/>$2.2B, 2012"| SONY3["Sony/ATV Publishing"]
    EMI3 -->|"Parlophone + divested labels<br/>$765M, 2013"| WMG2["Warner Music Group"]

    UMG1 --> UMG2
    WMG --> WMG2
    SONY2 --> SONY3

    subgraph "Big Three (2013–Present)"
        UMG2
        SONY3
        WMG2
    end

    style UMG2 fill:#4a90d9,stroke:#333,color:#fff
    style SONY3 fill:#e74c3c,stroke:#333,color:#fff
    style WMG2 fill:#f39c12,stroke:#333,color:#fff
```

---

## Universal Music Group — Label Lineage

```mermaid
graph TD
    subgraph "Direct Acquisitions / Organic"
        MCA_R["MCA Records<br/>(from Decca, 1962)"]
        UNI["Uni Records<br/>(1966)"]
        KAPP["Kapp Records<br/>(1967)"]
    end

    subgraph "Via PolyGram (1998)"
        AM["A&M Records<br/>(founded 1962)"]
        ISL["Island Records<br/>(founded 1959)"]
        DEFJ["Def Jam Recordings<br/>(founded 1984)"]
        MERC["Mercury Records<br/>(founded 1945)"]
        VERVE["Verve Records<br/>(founded 1956)"]
        DG["Deutsche Grammophon<br/>(founded 1898)"]
        POLY_R["Polydor Records"]
    end

    subgraph "Via MCA/Direct"
        INTER["Interscope Records<br/>(founded 1990)"]
        GEF["Geffen Records<br/>(founded 1980)"]
        MOT["Motown Records<br/>(founded 1959, acq. 1988)"]
    end

    subgraph "Via EMI (2012)"
        CAP["Capitol Records<br/>(founded 1942)"]
        VIRG["Virgin Records<br/>(founded 1972)"]
        BN["Blue Note Records<br/>(founded 1939)"]
    end

    MCA_R --> UMG["Universal Music Group"]
    UNI --> UMG
    KAPP --> UMG
    AM --> UMG
    ISL --> UMG
    DEFJ --> UMG
    MERC --> UMG
    VERVE --> UMG
    DG --> UMG
    POLY_R --> UMG
    INTER --> UMG
    GEF --> UMG
    MOT --> UMG
    CAP --> UMG
    VIRG --> UMG
    BN --> UMG

    style UMG fill:#4a90d9,stroke:#333,color:#fff
```

---

## Sony Music Entertainment — Label Lineage

```mermaid
graph TD
    subgraph "Via CBS Records (1988)"
        COL["Columbia Records<br/>(founded 1887)"]
        EPIC["Epic Records<br/>(founded 1953)"]
    end

    subgraph "Via BMG Merger (2004→2008)"
        RCA["RCA Records<br/>(founded 1900 as Victor)"]
        ARISTA["Arista Records<br/>(founded 1974, Clive Davis)"]
        JIVE["Jive Records<br/>(founded 1981, Clive Calder)"]
        LAFACE["LaFace Records<br/>(founded 1989)"]
        JREC["J Records<br/>(founded 2000, Clive Davis)"]
    end

    subgraph "Via EMI Publishing (2012/2018)"
        EMIPUB["EMI Music Publishing"]
    end

    COL --> SONY["Sony Music Entertainment"]
    EPIC --> SONY
    RCA --> SONY
    ARISTA --> SONY
    JIVE --> SONY
    LAFACE --> SONY
    JREC --> SONY
    EMIPUB --> SONY

    style SONY fill:#e74c3c,stroke:#333,color:#fff
```

---

## Warner Music Group — Label Lineage

```mermaid
graph TD
    subgraph "Original Warner Labels"
        WBR["Warner Bros. Records<br/>(founded 1958)"]
        REP["Reprise Records<br/>(founded 1960, Sinatra)"]
        ATL["Atlantic Records<br/>(founded 1947, Ertegun)"]
        ELK["Elektra Records<br/>(founded 1950, Holzman)"]
        NON["Nonesuch Records<br/>(founded 1964)"]
    end

    subgraph "Via EMI Divestiture (2013)"
        PARL["Parlophone<br/>(founded 1896)"]
        CHRY["Chrysalis Records"]
    end

    WBR --> WMG["Warner Music Group"]
    REP --> WMG
    ATL --> WMG
    ELK --> WMG
    NON --> WMG
    PARL --> WMG
    CHRY --> WMG

    style WMG fill:#f39c12,stroke:#333,color:#fff
```

---

## Corporate Ownership History

```mermaid
timeline
    title Major Label Corporate Ownership Changes
    1958 : Warner Bros. Records founded
    1962 : MCA acquires Decca/Universal
    1967 : Atlantic acquired by Warner
    1972 : PolyGram named (Philips/Siemens JV)
    1987 : BMG established (Bertelsmann)
    1988 : Sony acquires CBS Records ($2B)
    1990 : Time Warner formed
    1995 : Seagram acquires MCA
    1996 : MCA Music renamed Universal Music Group
    1998 : Seagram acquires PolyGram ($10.4B) — Big Six → Big Five
    2000 : Vivendi acquires Seagram
    2004 : Sony BMG joint venture — Big Five → Big Four
    2004 : Bronfman Jr. group buys WMG ($2.6B)
    2007 : Terra Firma acquires EMI ($4.7B LBO)
    2008 : Sony buys out BMG ($1.5B)
    2011 : Citigroup seizes EMI
    2011 : Access Industries buys WMG ($3.3B)
    2012 : EMI broken up — Big Four → Big Three
    2013 : WMG acquires Parlophone ($765M)
    2021 : UMG IPO (€46B valuation)
```

---

## Current Structure (2024–2025)

### Universal Music Group
| Division | Key Labels | Leader |
|----------|-----------|--------|
| East Coast (Republic Corps) | Republic Records, Def Jam, Island, Mercury | Monte Lipman |
| West Coast (Interscope Capitol) | Interscope Geffen A&M, Capitol, Motown, Verve, Blue Note | John Janick |
| Global | Polydor, Decca, Deutsche Grammophon, EMI, Virgin, Abbey Road Studios | Various |

### Sony Music Entertainment
| Key Labels | Function |
|-----------|----------|
| Columbia Records | Flagship |
| RCA Records | Co-flagship |
| Epic Records | Pop/urban |
| Legacy Recordings | Catalog |
| The Orchard | Indie distribution (26,000+ labels) |
| Sony Music Latin | Latin market |
| Sony Masterworks / Classical | Classical/crossover |

### Warner Music Group
| Division | Key Labels | Leader |
|----------|-----------|--------|
| Atlantic Music Group | Atlantic Records, 300 Elektra Entertainment, 10K Projects | Elliot Grainge |
| Warner Records | Warner Records, Reprise, Nonesuch, Warner Music Nashville | Tom Corson & Aaron Bay-Schuck |

---

*Sources: Billboard (UMG restructure 2024), Wikipedia (Sony Music labels), PR Newswire (WMG reorganization 2024)*

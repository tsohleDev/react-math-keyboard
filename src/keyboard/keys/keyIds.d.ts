export type KeyId = 
/**quantities */
"volumeMere" | "volumeFille" | "concentrationMere" | "concentrationFille"
/**units */
 | "cm" | "cm2" | "celsius" | "Hz" | "mol" | "kJ" | "mL" | "minutes" | "hours" | "timesTenPower"
/**utility */
 | "custom" | "right" | "left" | "rightarrow" | "del" | "close" | "switch" | "maj"
/**words */
 | "ou" | "et" | "aucun"
/**geometry */
 | "overrightarrow" | "degree" | "vectorU"
/**operations */
 | "plus" | "minus" | "times" | "frac" | "obelus" | "sqrt" | "sqrtCub" | "square" | "cube" | "power" | "percent" | "leftParenthesis" | "rightParenthesis" | "equal" | "comma" | "semicolon" | "dot" | "sup" | "inf" | "geq" | "leq" | "approx" | "xsquare" | "xcube"
/**sets */
 | "belongs" | "notin" | "cap" | "cup" | "lbrace" | "rbrace" | "lbracket" | "rbracket" | "varnothing" | "naturals" | "integers" | "rationals" | "decimals" | "reals" | "complex" | "ast" | "del" | "right" | "left" | "rightarrow" | "overrightarrow" | "infty"
/**fcts */
 | "log" | "ln" | "exp" | "epower" | "sin" | "cos" | "tan" | "arccos" | "arcsin" | "arctan" | "abs" | "fx"
/**sequences */
 | "un" | "unplus1"
/**probas */
 | "overlineProba" | "majProba" | "minProba" | "binom"
/**complex */
 | "overline"
/**greek */
 | "alpha" | "beta" | "delta" | "Delta" | "sigma" | "theta" | "tau" | "pi" | "phi" | "Omega" | "lambda" | "mu" | "gamma" | "omega"
/**alphabet */
 | "guillemet" | "quote" | "hyphen" | "euro" | "space" | "underscore" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" | "É" | "È" | "Ç" | "À" | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | "é" | "è" | "à" | "ç" | "ù" | "ô"
/**numbers */
 | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
/**atoms */
 | "Hydrogène" | "Hélium" | "Lithium" | "Béryllium" | "Bore" | "Carbone" | "Azote" | "Oxygène" | "Fluor" | "Néon" | "Sodium" | "Magnésium" | "Aluminium" | "Silicium" | "Phosphore" | "Soufre" | "Chlore" | "Argon" | "Potassium" | "Calcium" | "Scandium" | "Titane" | "Vanadium" | "Chrome" | "Manganèse" | "Fer" | "Cobalt" | "Nickel" | "Cuivre" | "Zinc" | "Gallium" | "Germanium" | "Arsenic" | "Sélénium" | "Brome" | "Krypton" | "Rubidium" | "Strontium" | "Yttrium" | "Zirconium" | "Niobium" | "Molybdène" | "Technétium" | "Ruthénium" | "Rhodium" | "Palladium" | "Argent" | "Cadmium" | "Indium" | "Étain" | "Antimoine" | "Tellure" | "Iode" | "Xénon" | "Césium" | "Baryum" | "Lanthane" | "Cérium" | "Praséodyme" | "Néodyme" | "Prométhium" | "Samarium" | "Europium" | "Gadolinium" | "Térbium" | "Dysprosium" | "Holmium" | "Erbium" | "Thulium" | "Ytterbium" | "Lutétium" | "Hafnium" | "Tantale" | "Tungstène" | "Rhénium" | "Osmium" | "Iridium" | "Platine" | "Or" | "Mercure" | "Thallium" | "Plomb" | "Bismuth" | "Polonium" | "Astate" | "Radon" | "Francium" | "Radium" | "Actinium" | "Thorium" | "Protactinium" | "Uranium" | "Neptunium" | "Plutonium" | "Américium" | "Curium" | "Berkélium" | "Californium" | "Einsteinium" | "Fermium" | "Mendélévium" | "Nobelium" | "Lawrencium" | "Rutherfordium" | "Dubnium" | "Seaborgium" | "Bohrium" | "Hassium" | "Meitnérium" | "Darmstadtium" | "Roentgenium" | "Copernicium" | "Nihonium" | "Flerovium" | "Moscovium" | "Livermorium" | "Tennessine" | "Oganesson"
/**Molecules */
 | "Mol-H2" | "Mol-O2" | "Mol-H2O" | "Mol-CH4" | "Mol-CO2" | "Mol-NH3" | "Mol-SO2" | "Mol-C2H5OH" | "Mol-C6H12O6" | "Mol-CH3OH" | "Mol-C3H8" | "Mol-C4H10" | "Mol-H2SO4" | "Mol-C3H6" | "Mol-C6H6" | "Mol-CH3CN" | "Mol-CH2O" | "Mol-HCOONa" | "Mol-CaCO3" | "Mol-NH42SO4" | "Mol-NH4NO3" | "Mol-Na2CO3" | "Mol-C6H8O6" | "Mol-C9H8O4" | "Mol-C8H10N4O2" | "Mol-C8H9NO2" | "Mol-NaCl" | "Mol-CH3COOH" | "Mol-Mg" | "Mol-MgO" | "Mol-Fe" | "Mol-Fe2O3" | "Mol-C2H6" | "Mol-C2H4" | "Mol-C3H6O" | "Mol-C7H8" | "Mol-C2H6O2" | "Mol-C4H8" | "Mol-C5H10" | "Mol-C6H12" | "Mol-C4H8O2" | "Mol-C3H6O2" | "Mol-C6H12O2" | "Mol-C6H6O" | "Mol-C2H4O" | "Mol-C4H8O" | "Mol-C5H4O2" | "Mol-CH2O2" | "Mol-C12H22O11" | "Mol-HCl" | "Mol-NaOH" | "Mol-AgNO3" | "Mol-AgCl" | "Mol-NaNO3" | "Mol-CaOH2" | "Mol-CaSO4" | "Mol-CuSO4" | "Mol-CuOH2" | "Mol-Na2SO4" | "Mol-Zn" | "Mol-ZnCl2" | "Mol-KOH" | "Mol-K2SO4" | "Mol-H2O2" | "Mol-PbCl2" | "Mol-KI" | "Mol-PbI2" | "Mol-KCl" | "Mol-CH3COONa" | "Mol-S" | "Mol-BaNO32" | "Mol-BaSO4" | "Mol-Cu" | "Mol-CuNO32" | "Mol-Ag" | "Mol-Ca3PO42" | "Mol-KNO3" | "Mol-N2" | "Mol-PbNO32" | "Mol-PbSO4" | "Mol-CaO" | "Mol-CuCl2" | "Mol-FeCl2" | "Mol-Cl2" | "Mol-N2O" | "Mol-N2O4" | "Mol-NO2" | "Mol-KClO3" | "Mol-ZnSO4" | "Mol-H3PO4" | "Mol-Na2O" | "Mol-NO" | "Mol-CO" | "Mol-Fe3O4" | "Mol-Cu2S" | "Mol-Cu2O" | "Mol-H3O+" | "Mol-SO42-" | "Mol-Fe2+" | "Mol-OH-" | "Mol-Ag+" | "Mol-PO43-" | "Mol-Ag3PO4" | "Mol-Cu2+" | "Mol-Ca3PO32" | "Mol-NH4Cl" | "Mol-S8" | "Mol-MgOH2" | "Mol-MgCl2";

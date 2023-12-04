const emojis = {
    // 'COPYRIGHT SIGN': '©️',
    // 'REGISTERED SIGN': '®️',
    // 'DOUBLE EXCLAMATION MARK': ' ‼️',
    // 'EXCLAMATION QUESTION MARK': '⁉️',
    // 'TRADE MARK SIGN': '™️',
    // 'INFORMATION SOURCE': ' ℹ️',
    // 'LEFT RIGHT ARROW': '↔️',
    // 'UP DOWN ARROW': ' ↕️',
    'NORTH WEST ARROW': '↖️',
    'NORTH EAST ARROW': '↗️',
    'SOUTH EAST ARROW': '↘️',
    'SOUTH WEST ARROW': '↙️',
    'LEFTWARDS ARROW WITH HOOK': '↩️',
    'RIGHTWARDS ARROW WITH HOOK': '↪️',
    'WATCH': '⌚️',
    'HOURGLASS': '⌛️',
    'KEYBOARD': '⌨️',
    'EJECT SYMBOL': '⏏️',
    'BLACK RIGHT-POINTING DOUBLE TRIANGLE': ' ⏩️',
    'BLACK LEFT-POINTING DOUBLE TRIANGLE': ' ⏪️',
    'BLACK UP-POINTING DOUBLE TRIANGLE': ' ⏫️',
    'BLACK DOWN-POINTING DOUBLE TRIANGLE': ' ⏬️',
    'BLACK RIGHT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR': ' ⏭️',
    'BLACK LEFT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR': ' ⏮️',
    'BLACK RIGHT-POINTING TRIANGLE WITH DOUBLE VERTICAL BAR': ' ⏯️',
    'ALARM CLOCK': '⏰️',
    'STOPWATCH': '⏱️',
    'TIMER CLOCK': '⏲️',
    'HOURGLASS WITH FLOWING SAND': '⏳️',
    'DOUBLE VERTICAL BAR': ' ⏸️',
    'BLACK SQUARE FOR STOP': ' ⏹️',
    'BLACK CIRCLE FOR RECORD': ' ⏺️',
    'CIRCLED LATIN CAPITAL LETTER M': 'Ⓜ️',
    // 'BLACK SMALL SQUARE': '▪️',
    // 'WHITE SMALL SQUARE': '▫️',
    'BLACK RIGHT-POINTING TRIANGLE': ' ▶️',
    'BLACK LEFT-POINTING TRIANGLE': ' ◀️',
    // 'WHITE MEDIUM SQUARE': '◻️',
    // 'BLACK MEDIUM SQUARE': '◼️',
    // 'WHITE MEDIUM SMALL SQUARE': '◽️',
    // 'BLACK MEDIUM SMALL SQUARE': '◾️',
    'BLACK SUN WITH RAYS': '☀️',
    'CLOUD': '☁️',
    'UMBRELLA': '☂️',
    'SNOWMAN': '☃️',
    'COMET': '☄️',
    'BLACK TELEPHONE': '☎️',
    'BALLOT BOX WITH CHECK': '☑️',
    'UMBRELLA WITH RAIN DROPS': '☔️',
    'HOT BEVERAGE': '☕️',
    'SHAMROCK': '☘️',
    'WHITE UP POINTING INDEX': '☝️',
    'SKULL AND CROSSBONES': '☠️',
    'RADIOACTIVE SIGN': '☢️',
    'BIOHAZARD SIGN': '☣️',
    'ORTHODOX CROSS': '☦️',
    'STAR AND CRESCENT': '☪️',
    'PEACE SYMBOL': '☮️',
    'YIN YANG': '☯️',
    'WHEEL OF DHARMA': '☸️',
    'WHITE FROWNING FACE': '☹️',
    // 'WHITE SMILING FACE': '☺️',
    // 'FEMALE SIGN': '♀️',
    // 'MALE SIGN': '♂️',
    'ARIES': '♈️',
    'TAURUS': '♉️',
    'GEMINI': '♊️',
    'CANCER': '♋️',
    'LEO': '♌️',
    'VIRGO': '♍️',
    'LIBRA': '♎️',
    'SCORPIUS': '♏️',
    'SAGITTARIUS': '♐️',
    'CAPRICORN': '♑️',
    'AQUARIUS': '♒️',
    'PISCES': '♓️',
    'BLACK CHESS PAWN': '♟️',
    // 'BLACK SPADE SUIT': '♠️',
    // 'BLACK CLUB SUIT': '♣️',
    // 'BLACK HEART SUIT': '♥️',
    // 'BLACK DIAMOND SUIT': '♦️',
    'HOT SPRINGS': '♨️',
    'BLACK UNIVERSAL RECYCLING SYMBOL': '♻️',
    'PERMANENT PAPER SIGN': '♾️',
    'WHEELCHAIR SYMBOL': '♿️',
    'HAMMER AND PICK': '⚒️',
    'ANCHOR': '⚓️',
    'CROSSED SWORDS': '⚔️',
    'STAFF OF AESCULAPIUS': '⚕️',
    'SCALES': '⚖️',
    'ALEMBIC': '⚗️',
    'GEAR': '⚙️',
    'ATOM SYMBOL': '⚛️',
    'FLEUR-DE-LIS': '⚜️',
    'WARNING SIGN': '⚠️',
    'HIGH VOLTAGE SIGN': '⚡️',
    // 'MALE WITH STROKE AND MALE AND FEMALE SIGN': '⚧️',
    'MEDIUM WHITE CIRCLE': '⚪️',
    'MEDIUM BLACK CIRCLE': ' ⚫️',
    'COFFIN': '⚰️',
    'FUNERAL URN': '⚱️',
    'SOCCER BALL': '⚽️',
    'BASEBALL': '⚾️',
    'SNOWMAN WITHOUT SNOW': '⛄️',
    'SUN BEHIND CLOUD': '⛅️',
    'THUNDER CLOUD AND RAIN': '⛈️',
    'OPHIUCHUS': '⛎️',
    'PICK': '⛏️',
    'HELMET WITH WHITE CROSS': '⛑️',
    'CHAINS': '⛓️',
    'NO ENTRY': '⛔️',
    'SHINTO SHRINE': '⛩️',
    'CHURCH': '⛪️',
    'MOUNTAIN': '⛰️',
    'UMBRELLA ON GROUND': '⛱️',
    'FOUNTAIN': '⛲️',
    'FLAG IN HOLE': '⛳️',
    'FERRY': '⛴️',
    'SAILBOAT': '⛵️',
    'SKIER': '⛷️',
    'ICE SKATE': '⛸️',
    'PERSON WITH BALL': '⛹️',
    'TENT': '⛺️',
    'FUEL PUMP': '⛽️',
    'BLACK SCISSORS': '✂️',
    'WHITE HEAVY CHECK MARK': '✅️',
    'AIRPLANE': '✈️',
    'ENVELOPE': '✉️',
    'RAISED FIST': '✊️',
    'RAISED HAND': '✋️',
    'VICTORY HAND': '✌️',
    'WRITING HAND': '✍️',
    'PENCIL': '✏️',
    'BLACK NIB': '✒️',
    'HEAVY CHECK MARK': '✔️',
    'HEAVY MULTIPLICATION X': '✖️',
    'LATIN CROSS': '✝️',
    'STAR OF DAVID': '✡️',
    'SPARKLES': '✨️',
    'EIGHT SPOKED ASTERISK': '✳️',
    'EIGHT POINTED BLACK STAR': '✴️',
    'SNOWFLAKE': '❄️',
    'SPARKLE': '❇️',
    'CROSS MARK': '❌️',
    'NEGATIVE SQUARED CROSS MARK': '❎️',
    'BLACK QUESTION MARK ORNAMENT': '❓️',
    'WHITE QUESTION MARK ORNAMENT': '❔️',
    'WHITE EXCLAMATION MARK ORNAMENT': '❕️',
    'HEAVY EXCLAMATION MARK SYMBOL': '❗️',
    'HEAVY HEART EXCLAMATION MARK ORNAMENT': '❣️',
    'HEAVY BLACK HEART': '❤️',
    'HEAVY PLUS SIGN': '➕️',
    'HEAVY MINUS SIGN': '➖️',
    'HEAVY DIVISION SIGN': '➗️',
    'BLACK RIGHTWARDS ARROW': '➡️',
    'CURLY LOOP': '➰️',
    'DOUBLE CURLY LOOP': '➿️',
    'ARROW POINTING RIGHTWARDS THEN CURVING UPWARDS': '⤴️',
    'ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS': '⤵️',
    'LEFTWARDS BLACK ARROW': '⬅️',
    'UPWARDS BLACK ARROW': '⬆️',
    'DOWNWARDS BLACK ARROW': ' ⬇️',
    'BLACK LARGE SQUARE': '⬛️',
    'WHITE LARGE SQUARE': '⬜️',
    'WHITE MEDIUM STAR': '⭐️',
    'HEAVY LARGE CIRCLE': '⭕️',
    'WAVY DASH': '〰️',
    'PART ALTERNATION MARK': '〽️',
    'CIRCLED IDEOGRAPH CONGRATULATION': '㊗️',
    'CIRCLED IDEOGRAPH SECRET': '㊙️',
    'MAHJONG TILE RED DRAGON': '🀄',
    'PLAYING CARD BLACK JOKER': '🃏',
    'NEGATIVE SQUARED LATIN CAPITAL LETTER A': '🅰️',
    'NEGATIVE SQUARED LATIN CAPITAL LETTER B': '🅱️',
    'NEGATIVE SQUARED LATIN CAPITAL LETTER O': '🅾️',
    'NEGATIVE SQUARED LATIN CAPITAL LETTER P': '🅿️',
    'NEGATIVE SQUARED AB': '🆎',
    'SQUARED CL': '🆑',
    'SQUARED COOL': '🆒',
    'SQUARED FREE': '🆓',
    'SQUARED ID': '🆔',
    'SQUARED NEW': '🆕',
    'SQUARED NG': '🆖',
    'SQUARED OK': '🆗',
    'SQUARED SOS': '🆘',
    'SQUARED UP WITH EXCLAMATION MARK': '🆙',
    'SQUARED VS': '🆚',
    'SQUARED KATAKANA KOKO': '🈁',
    'SQUARED KATAKANA SA': '🈂️',
    'SQUARED CJK UNIFIED IDEOGRAPH-7121': '🈚',
    'SQUARED CJK UNIFIED IDEOGRAPH-6307': '🈯',
    'SQUARED CJK UNIFIED IDEOGRAPH-7981': '🈲',
    'SQUARED CJK UNIFIED IDEOGRAPH-7A7A': '🈳',
    'SQUARED CJK UNIFIED IDEOGRAPH-5408': '🈴',
    'SQUARED CJK UNIFIED IDEOGRAPH-6E80': '🈵',
    'SQUARED CJK UNIFIED IDEOGRAPH-6709': '🈶',
    'SQUARED CJK UNIFIED IDEOGRAPH-6708': '🈷️',
    'SQUARED CJK UNIFIED IDEOGRAPH-7533': '🈸',
    'SQUARED CJK UNIFIED IDEOGRAPH-5272': '🈹',
    'SQUARED CJK UNIFIED IDEOGRAPH-55B6': '🈺',
    'CIRCLED IDEOGRAPH ADVANTAGE': '🉐',
    'CIRCLED IDEOGRAPH ACCEPT': '🉑',
    'CYCLONE': '🌀',
    'FOGGY': '🌁',
    'CLOSED UMBRELLA': '🌂',
    'NIGHT WITH STARS': '🌃',
    'SUNRISE OVER MOUNTAINS': '🌄',
    'SUNRISE': '🌅',
    'CITYSCAPE AT DUSK': '🌆',
    'SUNSET OVER BUILDINGS': '🌇',
    'RAINBOW': '🌈',
    'BRIDGE AT NIGHT': '🌉',
    'WATER WAVE': '🌊',
    'VOLCANO': '🌋',
    'MILKY WAY': '🌌',
    'EARTH GLOBE EUROPE-AFRICA': '🌍',
    'EARTH GLOBE AMERICAS': '🌎',
    'EARTH GLOBE ASIA-AUSTRALIA': '🌏',
    'GLOBE WITH MERIDIANS': '🌐',
    'NEW MOON SYMBOL': '🌑',
    'WAXING CRESCENT MOON SYMBOL': '🌒',
    'FIRST QUARTER MOON SYMBOL': '🌓',
    'WAXING GIBBOUS MOON SYMBOL': '🌔',
    'FULL MOON SYMBOL': '🌕',
    'WANING GIBBOUS MOON SYMBOL': '🌖',
    'LAST QUARTER MOON SYMBOL': '🌗',
    'WANING CRESCENT MOON SYMBOL': '🌘',
    'CRESCENT MOON': '🌙',
    'NEW MOON WITH FACE': '🌚',
    'FIRST QUARTER MOON WITH FACE': '🌛',
    'LAST QUARTER MOON WITH FACE': '🌜',
    'FULL MOON WITH FACE': '🌝',
    'SUN WITH FACE': '🌞',
    'GLOWING STAR': '🌟',
    'SHOOTING STAR': '🌠',
    'THERMOMETER': '🌡️',
    'WHITE SUN WITH SMALL CLOUD': '🌤️',
    'WHITE SUN BEHIND CLOUD': '🌥️',
    'WHITE SUN BEHIND CLOUD WITH RAIN': '🌦️',
    'CLOUD WITH RAIN': '🌧️',
    'CLOUD WITH SNOW': '🌨️',
    'CLOUD WITH LIGHTNING': '🌩️',
    'CLOUD WITH TORNADO': '🌪️',
    'FOG': '🌫️',
    'WIND BLOWING FACE': '🌬️',
    'HOT DOG': '🌭',
    'TACO': '🌮',
    'BURRITO': '🌯',
    'CHESTNUT': '🌰',
    'SEEDLING': '🌱',
    'EVERGREEN TREE': '🌲',
    'DECIDUOUS TREE': '🌳',
    'PALM TREE': '🌴',
    'CACTUS': '🌵',
    'HOT PEPPER': '🌶️',
    'TULIP': '🌷',
    'CHERRY BLOSSOM': '🌸',
    'ROSE': '🌹',
    'HIBISCUS': '🌺',
    'SUNFLOWER': '🌻',
    'BLOSSOM': '🌼',
    'EAR OF MAIZE': '🌽',
    'EAR OF RICE': '🌾',
    'HERB': '🌿',
    'FOUR LEAF CLOVER': '🍀',
    'MAPLE LEAF': '🍁',
    'FALLEN LEAF': '🍂',
    'LEAF FLUTTERING IN WIND': '🍃',
    'MUSHROOM': '🍄',
    'TOMATO': '🍅',
    'AUBERGINE': '🍆',
    'GRAPES': '🍇',
    'MELON': '🍈',
    'WATERMELON': '🍉',
    'TANGERINE': '🍊',
    'LEMON': '🍋',
    'BANANA': '🍌',
    'PINEAPPLE': '🍍',
    'RED APPLE': '🍎',
    'GREEN APPLE': '🍏',
    'PEAR': '🍐',
    'PEACH': '🍑',
    'CHERRIES': '🍒',
    'STRAWBERRY': '🍓',
    'HAMBURGER': '🍔',
    'SLICE OF PIZZA': '🍕',
    'MEAT ON BONE': '🍖',
    'POULTRY LEG': '🍗',
    'RICE CRACKER': '🍘',
    'RICE BALL': '🍙',
    'COOKED RICE': '🍚',
    'CURRY AND RICE': '🍛',
    'STEAMING BOWL': '🍜',
    'SPAGHETTI': '🍝',
    'BREAD': '🍞',
    'FRENCH FRIES': '🍟',
    'ROASTED SWEET POTATO': '🍠',
    'DANGO': '🍡',
    'ODEN': '🍢',
    'SUSHI': '🍣',
    'FRIED SHRIMP': '🍤',
    'FISH CAKE WITH SWIRL DESIGN': '🍥',
    'SOFT ICE CREAM': '🍦',
    'SHAVED ICE': '🍧',
    'ICE CREAM': '🍨',
    'DOUGHNUT': '🍩',
    'COOKIE': '🍪',
    'CHOCOLATE BAR': '🍫',
    'CANDY': '🍬',
    'LOLLIPOP': '🍭',
    'CUSTARD': '🍮',
    'HONEY POT': '🍯',
    'SHORTCAKE': '🍰',
    'BENTO BOX': '🍱',
    'POT OF FOOD': '🍲',
    'COOKING': '🍳',
    'FORK AND KNIFE': '🍴',
    'TEACUP WITHOUT HANDLE': '🍵',
    'SAKE BOTTLE AND CUP': '🍶',
    'WINE GLASS': '🍷',
    'COCKTAIL GLASS': '🍸',
    'TROPICAL DRINK': '🍹',
    'BEER MUG': '🍺',
    'CLINKING BEER MUGS': '🍻',
    'BABY BOTTLE': '🍼',
    'FORK AND KNIFE WITH PLATE': '🍽️',
    'BOTTLE WITH POPPING CORK': '🍾',
    'POPCORN': '🍿',
    'RIBBON': '🎀',
    'WRAPPED PRESENT': '🎁',
    'BIRTHDAY CAKE': '🎂',
    'JACK-O-LANTERN': '🎃',
    'CHRISTMAS TREE': '🎄',
    'FATHER CHRISTMAS': '🎅',
    'FIREWORKS': '🎆',
    'FIREWORK SPARKLER': '🎇',
    'BALLOON': '🎈',
    'PARTY POPPER': '🎉',
    'CONFETTI BALL': '🎊',
    'TANABATA TREE': '🎋',
    'CROSSED FLAGS': '🎌',
    'PINE DECORATION': '🎍',
    'JAPANESE DOLLS': '🎎',
    'CARP STREAMER': '🎏',
    'WIND CHIME': '🎐',
    'MOON VIEWING CEREMONY': '🎑',
    'SCHOOL SATCHEL': '🎒',
    'GRADUATION CAP': '🎓',
    'MILITARY MEDAL': '🎖️',
    'REMINDER RIBBON': '🎗️',
    'STUDIO MICROPHONE': '🎙️',
    'LEVEL SLIDER': '🎚️',
    'CONTROL KNOBS': '🎛️',
    'FILM FRAMES': '🎞️',
    'ADMISSION TICKETS': '🎟️',
    'CAROUSEL HORSE': '🎠',
    'FERRIS WHEEL': '🎡',
    'ROLLER COASTER': '🎢',
    'FISHING POLE AND FISH': '🎣',
    'MICROPHONE': '🎤',
    'MOVIE CAMERA': '🎥',
    'CINEMA': '🎦',
    'HEADPHONE': '🎧',
    'ARTIST PALETTE': '🎨',
    'TOP HAT': '🎩',
    'CIRCUS TENT': '🎪',
    'TICKET': '🎫',
    'CLAPPER BOARD': '🎬',
    'PERFORMING ARTS': '🎭',
    'VIDEO GAME': '🎮',
    'DIRECT HIT': '🎯',
    'SLOT MACHINE': '🎰',
    'BILLIARDS': '🎱',
    'GAME DIE': '🎲',
    'BOWLING': '🎳',
    'FLOWER PLAYING CARDS': '🎴',
    'MUSICAL NOTE': '🎵',
    'MULTIPLE MUSICAL NOTES': '🎶',
    'SAXOPHONE': '🎷',
    'GUITAR': '🎸',
    'MUSICAL KEYBOARD': '🎹',
    'TRUMPET': '🎺',
    'VIOLIN': '🎻',
    'MUSICAL SCORE': '🎼',
    'RUNNING SHIRT WITH SASH': '🎽',
    'TENNIS RACQUET AND BALL': '🎾',
    'SKI AND SKI BOOT': '🎿',
    'BASKETBALL AND HOOP': '🏀',
    'CHEQUERED FLAG': '🏁',
    'SNOWBOARDER': '🏂',
    'RUNNER': '🏃',
    'SURFER': '🏄',
    'SPORTS MEDAL': '🏅',
    'TROPHY': '🏆',
    'HORSE RACING': '🏇',
    'AMERICAN FOOTBALL': '🏈',
    'RUGBY FOOTBALL': '🏉',
    'SWIMMER': '🏊',
    'WEIGHT LIFTER': '🏋️',
    'GOLFER': '🏌️',
    'RACING MOTORCYCLE': '🏍️',
    'RACING CAR': '🏎️',
    'CRICKET BAT AND BALL': '🏏',
    'VOLLEYBALL': '🏐',
    'FIELD HOCKEY STICK AND BALL': '🏑',
    'ICE HOCKEY STICK AND PUCK': '🏒',
    'TABLE TENNIS PADDLE AND BALL': '🏓',
    'SNOW CAPPED MOUNTAIN': '🏔️',
    'CAMPING': '🏕️',
    'BEACH WITH UMBRELLA': '🏖️',
    'BUILDING CONSTRUCTION': '🏗️',
    'HOUSE BUILDINGS': '🏘️',
    'CITYSCAPE': '🏙️',
    'DERELICT HOUSE BUILDING': '🏚️',
    'CLASSICAL BUILDING': '🏛️',
    'DESERT': '🏜️',
    'DESERT ISLAND': '🏝️',
    'NATIONAL PARK': '🏞️',
    'STADIUM': '🏟️',
    'HOUSE BUILDING': '🏠',
    'HOUSE WITH GARDEN': '🏡',
    'OFFICE BUILDING': '🏢',
    'JAPANESE POST OFFICE': '🏣',
    'EUROPEAN POST OFFICE': '🏤',
    'HOSPITAL': '🏥',
    'BANK': '🏦',
    'AUTOMATED TELLER MACHINE': '🏧',
    'HOTEL': '🏨',
    'LOVE HOTEL': '🏩',
    'CONVENIENCE STORE': '🏪',
    'SCHOOL': '🏫',
    'DEPARTMENT STORE': '🏬',
    'FACTORY': '🏭',
    'IZAKAYA LANTERN': '🏮',
    'JAPANESE CASTLE': '🏯',
    'EUROPEAN CASTLE': '🏰',
    'WAVING WHITE FLAG': '🏳️',
    'WAVING BLACK FLAG': '🏴',
    'ROSETTE': '🏵️',
    'LABEL': '🏷️',
    'BADMINTON RACQUET AND SHUTTLECOCK': '🏸',
    'BOW AND ARROW': '🏹',
    'AMPHORA': '🏺',
    // 'EMOJI MODIFIER FITZPATRICK TYPE-1-2': '🏻',
    // 'EMOJI MODIFIER FITZPATRICK TYPE-3': '🏼',
    // 'EMOJI MODIFIER FITZPATRICK TYPE-4': '🏽',
    // 'EMOJI MODIFIER FITZPATRICK TYPE-5': '🏾',
    // 'EMOJI MODIFIER FITZPATRICK TYPE-6': '🏿',
    'RAT': '🐀',
    'MOUSE': '🐁',
    'OX': '🐂',
    'WATER BUFFALO': '🐃',
    'COW': '🐄',
    'TIGER': '🐅',
    'LEOPARD': '🐆',
    'RABBIT': '🐇',
    'CAT': '🐈',
    'DRAGON': '🐉',
    'CROCODILE': '🐊',
    'WHALE': '🐋',
    'SNAIL': '🐌',
    'SNAKE': '🐍',
    'HORSE': '🐎',
    'RAM': '🐏',
    'GOAT': '🐐',
    'SHEEP': '🐑',
    'MONKEY': '🐒',
    'ROOSTER': '🐓',
    'CHICKEN': '🐔',
    'DOG': '🐕',
    'PIG': '🐖',
    'BOAR': '🐗',
    'ELEPHANT': '🐘',
    'OCTOPUS': '🐙',
    'SPIRAL SHELL': '🐚',
    'BUG': '🐛',
    'ANT': '🐜',
    'HONEYBEE': '🐝',
    'LADY BEETLE': '🐞',
    'FISH': '🐟',
    'TROPICAL FISH': '🐠',
    'BLOWFISH': '🐡',
    'TURTLE': '🐢',
    'HATCHING CHICK': '🐣',
    'BABY CHICK': '🐤',
    'FRONT-FACING BABY CHICK': '🐥',
    'BIRD': '🐦',
    'PENGUIN': '🐧',
    'KOALA': '🐨',
    'POODLE': '🐩',
    'DROMEDARY CAMEL': '🐪',
    'BACTRIAN CAMEL': '🐫',
    'DOLPHIN': '🐬',
    'MOUSE FACE': '🐭',
    'COW FACE': '🐮',
    'TIGER FACE': '🐯',
    'RABBIT FACE': '🐰',
    'CAT FACE': '🐱',
    'DRAGON FACE': '🐲',
    'SPOUTING WHALE': '🐳',
    'HORSE FACE': '🐴',
    'MONKEY FACE': '🐵',
    'DOG FACE': '🐶',
    'PIG FACE': '🐷',
    'FROG FACE': '🐸',
    'HAMSTER FACE': '🐹',
    'WOLF FACE': '🐺',
    'BEAR FACE': '🐻',
    'PANDA FACE': '🐼',
    'PIG NOSE': '🐽',
    'PAW PRINTS': '🐾',
    'CHIPMUNK': '🐿️',
    'EYES': '👀',
    'EYE': '👁️',
    'EAR': '👂',
    'NOSE': '👃',
    'MOUTH': '👄',
    'TONGUE': '👅',
    'WHITE UP POINTING BACKHAND INDEX': '👆',
    'WHITE DOWN POINTING BACKHAND INDEX': '👇',
    'WHITE LEFT POINTING BACKHAND INDEX': '👈',
    'WHITE RIGHT POINTING BACKHAND INDEX': '👉',
    'FISTED HAND SIGN': '👊',
    'WAVING HAND SIGN': '👋',
    'OK HAND SIGN': '👌',
    'THUMBS UP SIGN': '👍',
    'THUMBS DOWN SIGN': '👎',
    'CLAPPING HANDS SIGN': '👏',
    'OPEN HANDS SIGN': '👐',
    'CROWN': '👑',
    'WOMANS HAT': '👒',
    'EYEGLASSES': '👓',
    'NECKTIE': '👔',
    'T-SHIRT': '👕',
    'JEANS': '👖',
    'DRESS': '👗',
    'KIMONO': '👘',
    'BIKINI': '👙',
    'WOMANS CLOTHES': '👚',
    'PURSE': '👛',
    'HANDBAG': '👜',
    'POUCH': '👝',
    'MANS SHOE': '👞',
    'ATHLETIC SHOE': '👟',
    'HIGH-HEELED SHOE': '👠',
    'WOMANS SANDAL': '👡',
    'WOMANS BOOTS': '👢',
    'FOOTPRINTS': '👣',
    'BUST IN SILHOUETTE': '👤',
    'BUSTS IN SILHOUETTE': '👥',
    'BOY': '👦',
    'GIRL': '👧',
    'MAN': '👨',
    'WOMAN': '👩',
    'FAMILY': '👪',
    'MAN AND WOMAN HOLDING HANDS': '👫',
    'TWO MEN HOLDING HANDS': '👬',
    'TWO WOMEN HOLDING HANDS': '👭',
    'POLICE OFFICER': '👮',
    'WOMAN WITH BUNNY EARS': '👯',
    'BRIDE WITH VEIL': '👰',
    'PERSON WITH BLOND HAIR': '👱',
    'MAN WITH GUA PI MAO': '👲',
    'MAN WITH TURBAN': '👳',
    'OLDER MAN': '👴',
    'OLDER WOMAN': '👵',
    'BABY': '👶',
    'CONSTRUCTION WORKER': '👷',
    'PRINCESS': '👸',
    'JAPANESE OGRE': '👹',
    'JAPANESE GOBLIN': '👺',
    'GHOST': '👻',
    'BABY ANGEL': '👼',
    'EXTRATERRESTRIAL ALIEN': '👽',
    'ALIEN MONSTER': '👾',
    'IMP': '👿',
    'SKULL': '💀',
    'INFORMATION DESK PERSON': '💁',
    'GUARDSMAN': '💂',
    'DANCER': '💃',
    'LIPSTICK': '💄',
    'NAIL POLISH': '💅',
    'FACE MASSAGE': '💆',
    'HAIRCUT': '💇',
    'BARBER POLE': '💈',
    'SYRINGE': '💉',
    'PILL': '💊',
    'KISS MARK': '💋',
    'LOVE LETTER': '💌',
    'RING': '💍',
    'GEM STONE': '💎',
    'KISS': '💏',
    'BOUQUET': '💐',
    'COUPLE WITH HEART': '💑',
    'WEDDING': '💒',
    'BEATING HEART': '💓',
    'BROKEN HEART': '💔',
    'TWO HEARTS': '💕',
    'SPARKLING HEART': '💖',
    'GROWING HEART': '💗',
    'HEART WITH ARROW': '💘',
    'BLUE HEART': '💙',
    'GREEN HEART': '💚',
    'YELLOW HEART': '💛',
    'PURPLE HEART': '💜',
    'HEART WITH RIBBON': '💝',
    'REVOLVING HEARTS': '💞',
    'HEART DECORATION': '💟',
    'DIAMOND SHAPE WITH A DOT INSIDE': '💠',
    'ELECTRIC LIGHT BULB': '💡',
    'ANGER SYMBOL': '💢',
    'BOMB': '💣',
    'SLEEPING SYMBOL': '💤',
    'COLLISION SYMBOL': '💥',
    'SPLASHING SWEAT SYMBOL': '💦',
    'DROPLET': '💧',
    'DASH SYMBOL': '💨',
    'PILE OF POO': '💩',
    'FLEXED BICEPS': '💪',
    'DIZZY SYMBOL': '💫',
    'SPEECH BALLOON': '💬',
    'THOUGHT BALLOON': '💭',
    'WHITE FLOWER': '💮',
    'HUNDRED POINTS SYMBOL': '💯',
    'MONEY BAG': '💰',
    'CURRENCY EXCHANGE': '💱',
    'HEAVY DOLLAR SIGN': '💲',
    'CREDIT CARD': '💳',
    'BANKNOTE WITH YEN SIGN': '💴',
    'BANKNOTE WITH DOLLAR SIGN': '💵',
    'BANKNOTE WITH EURO SIGN': '💶',
    'BANKNOTE WITH POUND SIGN': '💷',
    'MONEY WITH WINGS': '💸',
    'CHART WITH UPWARDS TREND AND YEN SIGN': '💹',
    'SEAT': '💺',
    'PERSONAL COMPUTER': '💻',
    'BRIEFCASE': '💼',
    'MINIDISC': '💽',
    'FLOPPY DISK': '💾',
    'OPTICAL DISC': '💿',
    'DVD': '📀',
    'FILE FOLDER': '📁',
    'OPEN FILE FOLDER': '📂',
    'PAGE WITH CURL': '📃',
    'PAGE FACING UP': '📄',
    'CALENDAR': '📅',
    'TEAR-OFF CALENDAR': '📆',
    'CARD INDEX': '📇',
    'CHART WITH UPWARDS TREND': '📈',
    'CHART WITH DOWNWARDS TREND': '📉',
    'BAR CHART': '📊',
    'CLIPBOARD': '📋',
    'PUSHPIN': '📌',
    'ROUND PUSHPIN': '📍',
    'PAPERCLIP': '📎',
    'STRAIGHT RULER': '📏',
    'TRIANGULAR RULER': '📐',
    'BOOKMARK TABS': '📑',
    'LEDGER': '📒',
    'NOTEBOOK': '📓',
    'NOTEBOOK WITH DECORATIVE COVER': '📔',
    'CLOSED BOOK': '📕',
    'OPEN BOOK': '📖',
    'GREEN BOOK': '📗',
    'BLUE BOOK': '📘',
    'ORANGE BOOK': '📙',
    'BOOKS': '📚',
    'NAME BADGE': '📛',
    'SCROLL': '📜',
    'MEMO': '📝',
    'TELEPHONE RECEIVER': '📞',
    'PAGER': '📟',
    'FAX MACHINE': '📠',
    'SATELLITE ANTENNA': '📡',
    'PUBLIC ADDRESS LOUDSPEAKER': '📢',
    'CHEERING MEGAPHONE': '📣',
    'OUTBOX TRAY': '📤',
    'INBOX TRAY': '📥',
    'PACKAGE': '📦',
    'E-MAIL SYMBOL': '📧',
    'INCOMING ENVELOPE': '📨',
    'ENVELOPE WITH DOWNWARDS ARROW ABOVE': '📩',
    'CLOSED MAILBOX WITH LOWERED FLAG': '📪',
    'CLOSED MAILBOX WITH RAISED FLAG': '📫',
    'OPEN MAILBOX WITH RAISED FLAG': '📬',
    'OPEN MAILBOX WITH LOWERED FLAG': '📭',
    'POSTBOX': '📮',
    'POSTAL HORN': '📯',
    'NEWSPAPER': '📰',
    'MOBILE PHONE': '📱',
    'MOBILE PHONE WITH RIGHTWARDS ARROW AT LEFT': '📲',
    'VIBRATION MODE': '📳',
    'MOBILE PHONE OFF': '📴',
    'NO MOBILE PHONES': '📵',
    'ANTENNA WITH BARS': '📶',
    'CAMERA': '📷',
    'CAMERA WITH FLASH': '📸',
    'VIDEO CAMERA': '📹',
    'TELEVISION': '📺',
    'RADIO': '📻',
    'VIDEOCASSETTE': '📼',
    'FILM PROJECTOR': '📽️',
    'PRAYER BEADS': '📿',
    'TWISTED RIGHTWARDS ARROWS': '🔀',
    'CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS': '🔁',
    'CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS WITH CIRCLED ONE OVERLAY': '🔂',
    'CLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS': '🔃',
    'ANTICLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS': '🔄',
    'LOW BRIGHTNESS SYMBOL': '🔅',
    'HIGH BRIGHTNESS SYMBOL': '🔆',
    'SPEAKER WITH CANCELLATION STROKE': '🔇',
    'SPEAKER': '🔈',
    'SPEAKER WITH ONE SOUND WAVE': '🔉',
    'SPEAKER WITH THREE SOUND WAVES': '🔊',
    'BATTERY': '🔋',
    'ELECTRIC PLUG': '🔌',
    'LEFT-POINTING MAGNIFYING GLASS': '🔍',
    'RIGHT-POINTING MAGNIFYING GLASS': '🔎',
    'LOCK WITH INK PEN': '🔏',
    'CLOSED LOCK WITH KEY': '🔐',
    'KEY': '🔑',
    'LOCK': '🔒',
    'OPEN LOCK': '🔓',
    'BELL': ' 🔔',
    'BELL WITH CANCELLATION STROKE': '🔕',
    'BOOKMARK': '🔖',
    'LINK SYMBOL': '🔗',
    'RADIO BUTTON': '🔘',
    'BACK WITH LEFTWARDS ARROW ABOVE': '🔙',
    'END WITH LEFTWARDS ARROW ABOVE': '🔚',
    'ON WITH EXCLAMATION MARK WITH LEFT RIGHT ARROW ABOVE': '🔛',
    'SOON WITH RIGHTWARDS ARROW ABOVE': '🔜',
    'TOP WITH UPWARDS ARROW ABOVE': '🔝',
    'NO ONE UNDER EIGHTEEN SYMBOL': '🔞',
    'KEYCAP TEN': '🔟',
    'INPUT SYMBOL FOR LATIN CAPITAL LETTERS': '🔠',
    'INPUT SYMBOL FOR LATIN SMALL LETTERS': '🔡',
    'INPUT SYMBOL FOR NUMBERS': '🔢',
    'INPUT SYMBOL FOR SYMBOLS': '🔣',
    'INPUT SYMBOL FOR LATIN LETTERS': '🔤',
    'FIRE': '🔥',
    'ELECTRIC TORCH': '🔦',
    'WRENCH': '🔧',
    'HAMMER': '🔨',
    'NUT AND BOLT': '🔩',
    'HOCHO': '🔪',
    'PISTOL': '🔫',
    'MICROSCOPE': '🔬',
    'TELESCOPE': '🔭',
    'CRYSTAL BALL': '🔮',
    'SIX POINTED STAR WITH MIDDLE DOT': '🔯',
    'JAPANESE SYMBOL FOR BEGINNER': '🔰',
    'TRIDENT EMBLEM': '🔱',
    'BLACK SQUARE BUTTON': '🔲',
    'WHITE SQUARE BUTTON': '🔳',
    'LARGE RED CIRCLE': '🔴',
    'LARGE BLUE CIRCLE': '🔵',
    'LARGE ORANGE DIAMOND': '🔶',
    'LARGE BLUE DIAMOND': '🔷',
    'SMALL ORANGE DIAMOND': '🔸',
    'SMALL BLUE DIAMOND': '🔹',
    'UP-POINTING RED TRIANGLE': '🔺',
    'DOWN-POINTING RED TRIANGLE': '🔻',
    'UP-POINTING SMALL RED TRIANGLE': '🔼',
    'DOWN-POINTING SMALL RED TRIANGLE': '🔽',
    'OM SYMBOL': '🕉️',
    'DOVE OF PEACE': '🕊️',
    'KAABA': '🕋',
    'MOSQUE': '🕌',
    'SYNAGOGUE': '🕍',
    'MENORAH WITH NINE BRANCHES': '🕎',
    'CLOCK FACE ONE OCLOCK': '🕐',
    'CLOCK FACE TWO OCLOCK': '🕑',
    'CLOCK FACE THREE OCLOCK': '🕒',
    'CLOCK FACE FOUR OCLOCK': '🕓',
    'CLOCK FACE FIVE OCLOCK': '🕔',
    'CLOCK FACE SIX OCLOCK': '🕕',
    'CLOCK FACE SEVEN OCLOCK': '🕖',
    'CLOCK FACE EIGHT OCLOCK': '🕗',
    'CLOCK FACE NINE OCLOCK': '🕘',
    'CLOCK FACE TEN OCLOCK': '🕙',
    'CLOCK FACE ELEVEN OCLOCK': '🕚',
    'CLOCK FACE TWELVE OCLOCK': '🕛',
    'CLOCK FACE ONE-THIRTY': '🕜',
    'CLOCK FACE TWO-THIRTY': '🕝',
    'CLOCK FACE THREE-THIRTY': '🕞',
    'CLOCK FACE FOUR-THIRTY': '🕟',
    'CLOCK FACE FIVE-THIRTY': '🕠',
    'CLOCK FACE SIX-THIRTY': '🕡',
    'CLOCK FACE SEVEN-THIRTY': '🕢',
    'CLOCK FACE EIGHT-THIRTY': '🕣',
    'CLOCK FACE NINE-THIRTY': '🕤',
    'CLOCK FACE TEN-THIRTY': '🕥',
    'CLOCK FACE ELEVEN-THIRTY': '🕦',
    'CLOCK FACE TWELVE-THIRTY': '🕧',
    'CANDLE': '🕯️',
    'MANTELPIECE CLOCK': '🕰️',
    'HOLE': '🕳️',
    'MAN IN BUSINESS SUIT LEVITATING': '🕴️',
    'SLEUTH OR SPY': '🕵️',
    'DARK SUNGLASSES': '🕶️',
    'SPIDER': '🕷️',
    'SPIDER WEB': '🕸️',
    'JOYSTICK': '🕹️',
    'MAN DANCING': '🕺',
    'LINKED PAPERCLIPS': '🖇️',
    'LOWER LEFT BALLPOINT PEN': '🖊️',
    'LOWER LEFT FOUNTAIN PEN': '🖋️',
    'LOWER LEFT PAINTBRUSH': '🖌️',
    'LOWER LEFT CRAYON': '🖍️',
    'RAISED HAND WITH FINGERS SPLAYED': '🖐️',
    'REVERSED HAND WITH MIDDLE FINGER EXTENDED': '🖕',
    'RAISED HAND WITH PART BETWEEN MIDDLE AND RING FINGERS': '🖖',
    'BLACK HEART': '🖤',
    'DESKTOP COMPUTER': '🖥️',
    'PRINTER': '🖨️',
    'THREE BUTTON MOUSE': '🖱️',
    'TRACKBALL': '🖲️',
    'FRAME WITH PICTURE': '🖼️',
    'CARD INDEX DIVIDERS': '🗂️',
    'CARD FILE BOX': '🗃️',
    'FILE CABINET': '🗄️',
    'WASTEBASKET': '🗑️',
    'SPIRAL NOTE PAD': '🗒️',
    'SPIRAL CALENDAR PAD': '🗓️',
    'COMPRESSION': '🗜️',
    'OLD KEY': '🗝️',
    'ROLLED-UP NEWSPAPER': '🗞️',
    'DAGGER KNIFE': '🗡️',
    'SPEAKING HEAD IN SILHOUETTE': '🗣️',
    'LEFT SPEECH BUBBLE': '🗨️',
    'RIGHT ANGER BUBBLE': '🗯️',
    'BALLOT BOX WITH BALLOT': '🗳️',
    'WORLD MAP': '🗺️',
    'MOUNT FUJI': '🗻',
    'TOKYO TOWER': '🗼',
    'STATUE OF LIBERTY': '🗽',
    'SILHOUETTE OF JAPAN': '🗾',
    'MOYAI': '🗿',
    'GRINNING FACE': '😀',
    'GRINNING FACE WITH SMILING EYES': '😁',
    'FACE WITH TEARS OF JOY': '😂',
    'SMILING FACE WITH OPEN MOUTH': '😃',
    'SMILING FACE WITH OPEN MOUTH AND SMILING EYES': '😄',
    'SMILING FACE WITH OPEN MOUTH AND COLD SWEAT': '😅',
    'SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES': '😆',
    'SMILING FACE WITH HALO': '😇',
    'SMILING FACE WITH HORNS': '😈',
    'WINKING FACE': '😉',
    'SMILING FACE WITH SMILING EYES': '😊',
    'FACE SAVOURING DELICIOUS FOOD': '😋',
    'RELIEVED FACE': '😌',
    'SMILING FACE WITH HEART-SHAPED EYES': '😍',
    'SMILING FACE WITH SUNGLASSES': '😎',
    'SMIRKING FACE': '😏',
    'NEUTRAL FACE': '😐',
    'EXPRESSIONLESS FACE': '😑',
    'UNAMUSED FACE': '😒',
    'FACE WITH COLD SWEAT': '😓',
    'PENSIVE FACE': '😔',
    'CONFUSED FACE': '😕',
    'CONFOUNDED FACE': '😖',
    'KISSING FACE': '😗',
    'FACE THROWING A KISS': '😘',
    'KISSING FACE WITH SMILING EYES': '😙',
    'KISSING FACE WITH CLOSED EYES': '😚',
    'FACE WITH STUCK-OUT TONGUE': '😛',
    'FACE WITH STUCK-OUT TONGUE AND WINKING EYE': '😜',
    'FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES': '😝',
    'DISAPPOINTED FACE': '😞',
    'WORRIED FACE': '😟',
    'ANGRY FACE': '😠',
    'POUTING FACE': '😡',
    'CRYING FACE': '😢',
    'PERSEVERING FACE': '😣',
    'FACE WITH LOOK OF TRIUMPH': '😤',
    'DISAPPOINTED BUT RELIEVED FACE': '😥',
    'FROWNING FACE WITH OPEN MOUTH': '😦',
    'ANGUISHED FACE': '😧',
    'FEARFUL FACE': '😨',
    'WEARY FACE': '😩',
    'SLEEPY FACE': '😪',
    'TIRED FACE': '😫',
    'GRIMACING FACE': '😬',
    'LOUDLY CRYING FACE': '😭',
    'FACE WITH OPEN MOUTH': '😮',
    'HUSHED FACE': '😯',
    'FACE WITH OPEN MOUTH AND COLD SWEAT': '😰',
    'FACE SCREAMING IN FEAR': '😱',
    'ASTONISHED FACE': '😲',
    'FLUSHED FACE': '😳',
    'SLEEPING FACE': '😴',
    'DIZZY FACE': '😵',
    'FACE WITHOUT MOUTH': '😶',
    'FACE WITH MEDICAL MASK': '😷',
    'GRINNING CAT FACE WITH SMILING EYES': '😸',
    'CAT FACE WITH TEARS OF JOY': '😹',
    'SMILING CAT FACE WITH OPEN MOUTH': '😺',
    'SMILING CAT FACE WITH HEART-SHAPED EYES': '😻',
    'CAT FACE WITH WRY SMILE': '😼',
    'KISSING CAT FACE WITH CLOSED EYES': '😽',
    'POUTING CAT FACE': '😾',
    'CRYING CAT FACE': '😿',
    'WEARY CAT FACE': '🙀',
    'SLIGHTLY FROWNING FACE': '🙁',
    'SLIGHTLY SMILING FACE': '🙂',
    'UPSIDE-DOWN FACE': '🙃',
    'FACE WITH ROLLING EYES': '🙄',
    'FACE WITH NO GOOD GESTURE': '🙅',
    'FACE WITH OK GESTURE': '🙆',
    'PERSON BOWING DEEPLY': '🙇',
    'SEE-NO-EVIL MONKEY': '🙈',
    'HEAR-NO-EVIL MONKEY': '🙉',
    'SPEAK-NO-EVIL MONKEY': '🙊',
    'HAPPY PERSON RAISING ONE HAND': '🙋',
    'PERSON RAISING BOTH HANDS IN CELEBRATION': '🙌',
    'PERSON FROWNING': '🙍',
    'PERSON WITH POUTING FACE': '🙎',
    'PERSON WITH FOLDED HANDS': '🙏',
    'ROCKET': '🚀',
    'HELICOPTER': '🚁',
    'STEAM LOCOMOTIVE': '🚂',
    'RAILWAY CAR': '🚃',
    'HIGH-SPEED TRAIN': '🚄',
    'HIGH-SPEED TRAIN WITH BULLET NOSE': '🚅',
    'TRAIN': '🚆',
    'METRO': '🚇',
    'LIGHT RAIL': '🚈',
    'STATION': '🚉',
    'TRAM': '🚊',
    'TRAM CAR': '🚋',
    'BUS': '🚌',
    'ONCOMING BUS': '🚍',
    'TROLLEYBUS': '🚎',
    'BUS STOP': '🚏',
    'MINIBUS': '🚐',
    'AMBULANCE': '🚑',
    'FIRE ENGINE': '🚒',
    'POLICE CAR': '🚓',
    'ONCOMING POLICE CAR': '🚔',
    'TAXI': '🚕',
    'ONCOMING TAXI': '🚖',
    'AUTOMOBILE': '🚗',
    'ONCOMING AUTOMOBILE': '🚘',
    'RECREATIONAL VEHICLE': '🚙',
    'DELIVERY TRUCK': '🚚',
    'ARTICULATED LORRY': '🚛',
    'TRACTOR': '🚜',
    'MONORAIL': '🚝',
    'MOUNTAIN RAILWAY': '🚞',
    'SUSPENSION RAILWAY': '🚟',
    'MOUNTAIN CABLEWAY': '🚠',
    'AERIAL TRAMWAY': '🚡',
    'SHIP': '🚢',
    'ROWBOAT': '🚣',
    'SPEEDBOAT': '🚤',
    'HORIZONTAL TRAFFIC LIGHT': '🚥',
    'VERTICAL TRAFFIC LIGHT': '🚦',
    'CONSTRUCTION SIGN': '🚧',
    'POLICE CARS REVOLVING LIGHT': '🚨',
    'TRIANGULAR FLAG ON POST': '🚩',
    'DOOR': '🚪',
    'NO ENTRY SIGN': '🚫',
    'SMOKING SYMBOL': '🚬',
    'NO SMOKING SYMBOL': '🚭',
    'PUT LITTER IN ITS PLACE SYMBOL': '🚮',
    'DO NOT LITTER SYMBOL': '🚯',
    'POTABLE WATER SYMBOL': '🚰',
    'NON-POTABLE WATER SYMBOL': '🚱',
    'BICYCLE': '🚲',
    'NO BICYCLES': '🚳',
    'BICYCLIST': '🚴',
    'MOUNTAIN BICYCLIST': '🚵',
    'PEDESTRIAN': '🚶',
    'NO PEDESTRIANS': '🚷',
    'CHILDREN CROSSING': '🚸',
    'MENS SYMBOL': '🚹',
    'WOMENS SYMBOL': '🚺',
    'RESTROOM': '🚻',
    'BABY SYMBOL': '🚼',
    'TOILET': '🚽',
    'WATER CLOSET': '🚾',
    'SHOWER': '🚿',
    'BATH': '🛀',
    'BATHTUB': '🛁',
    'PASSPORT CONTROL': '🛂',
    'CUSTOMS': '🛃',
    'BAGGAGE CLAIM': '🛄',
    'LEFT LUGGAGE': '🛅',
    'COUCH AND LAMP': '🛋️',
    'SLEEPING ACCOMMODATION': '🛌',
    'SHOPPING BAGS': '🛍️',
    'BELLHOP BELL': '🛎️',
    'BED': '🛏️',
    'PLACE OF WORSHIP': '🛐',
    'OCTAGONAL SIGN': '🛑',
    'SHOPPING TROLLEY': '🛒',
    'HINDU TEMPLE': '🛕',
    // 'HUT': '🛖',
    // 'ELEVATOR': '🛗',
    // 'WIRELESS': '🛜',
    // 'PLAYGROUND SLIDE': '🛝',
    // 'WHEEL': '🛞',
    // 'RING BUOY': '🛟',
    'HAMMER AND WRENCH': '🛠️',
    'SHIELD': '🛡️',
    'OIL DRUM': '🛢️',
    'MOTORWAY': '🛣️',
    'RAILWAY TRACK': '🛤️',
    'MOTOR BOAT': '🛥️',
    'SMALL AIRPLANE': '🛩️',
    'AIRPLANE DEPARTURE': '🛫',
    'AIRPLANE ARRIVING': '🛬',
    'SATELLITE': '🛰️',
    'PASSENGER SHIP': '🛳️',
    'SCOOTER': '🛴',
    'MOTOR SCOOTER': '🛵',
    'CANOE': '🛶',
    'SLED': '🛷',
    'FLYING SAUCER': '🛸',
    'SKATEBOARD': '🛹',
    'AUTO RICKSHAW': '🛺',
    // 'PICKUP TRUCK': '🛻',
    // 'ROLLER SKATE': '🛼',
    'LARGE ORANGE CIRCLE': '🟠',
    'LARGE YELLOW CIRCLE': '🟡',
    'LARGE GREEN CIRCLE': '🟢',
    'LARGE PURPLE CIRCLE': '🟣',
    'LARGE BROWN CIRCLE': '🟤',
    'LARGE RED SQUARE': '🟥',
    'LARGE BLUE SQUARE': '🟦',
    'LARGE ORANGE SQUARE': '🟧',
    'LARGE YELLOW SQUARE': '🟨',
    'LARGE GREEN SQUARE': '🟩',
    'LARGE PURPLE SQUARE': '🟪',
    'LARGE BROWN SQUARE': '🟫',
    // 'HEAVY EQUALS SIGN': '🟰',
    // 'PINCHED FINGERS': '🤌',
    'WHITE HEART': '🤍',
    'BROWN HEART': '🤎',
    'PINCHING HAND': '🤏',
    'ZIPPER-MOUTH FACE': '🤐',
    'MONEY-MOUTH FACE': '🤑',
    'FACE WITH THERMOMETER': '🤒',
    'NERD FACE': '🤓',
    'THINKING FACE': '🤔',
    'FACE WITH HEAD-BANDAGE': '🤕',
    'ROBOT FACE': '🤖',
    'HUGGING FACE': '🤗',
    'SIGN OF THE HORNS': '🤘',
    'CALL ME HAND': '🤙',
    'RAISED BACK OF HAND': '🤚',
    'LEFT-FACING FIST': '🤛',
    'RIGHT-FACING FIST': '🤜',
    'HANDSHAKE': '🤝',
    'HAND WITH INDEX AND MIDDLE FINGERS CROSSED': '🤞',
    'I LOVE YOU HAND SIGN': '🤟',
    'FACE WITH COWBOY HAT': '🤠',
    'CLOWN FACE': '🤡',
    'NAUSEATED FACE': '🤢',
    'ROLLING ON THE FLOOR LAUGHING': '🤣',
    'DROOLING FACE': '🤤',
    'LYING FACE': '🤥',
    'FACE PALM': '🤦',
    'SNEEZING FACE': '🤧',
    'FACE WITH ONE EYEBROW RAISED': '🤨',
    'GRINNING FACE WITH STAR EYES': '🤩',
    'GRINNING FACE WITH ONE LARGE AND ONE SMALL EYE': '🤪',
    'FACE WITH FINGER COVERING CLOSED LIPS': '🤫',
    'SERIOUS FACE WITH SYMBOLS COVERING MOUTH': '🤬',
    'SMILING FACE WITH SMILING EYES AND HAND COVERING MOUTH': '🤭',
    'FACE WITH OPEN MOUTH VOMITING': '🤮',
    'SHOCKED FACE WITH EXPLODING HEAD': '🤯',
    'PREGNANT WOMAN': '🤰',
    'BREAST-FEEDING': '🤱',
    'PALMS UP TOGETHER': '🤲',
    'SELFIE': '🤳',
    'PRINCE': '🤴',
    'MAN IN TUXEDO': '🤵',
    'MOTHER CHRISTMAS': '🤶',
    'SHRUG': '🤷',
    'PERSON DOING CARTWHEEL': '🤸',
    'JUGGLING': '🤹',
    'FENCER': '🤺',
    'WRESTLERS': '🤼',
    'WATER POLO': '🤽',
    'HANDBALL': '🤾',
    'DIVING MASK': '🤿',
    'WILTED FLOWER': '🥀',
    'DRUM WITH DRUMSTICKS': '🥁',
    'CLINKING GLASSES': '🥂',
    'TUMBLER GLASS': '🥃',
    'SPOON': '🥄',
    'GOAL NET': '🥅',
    'FIRST PLACE MEDAL': '🥇',
    'SECOND PLACE MEDAL': '🥈',
    'THIRD PLACE MEDAL': '🥉',
    'BOXING GLOVE': '🥊',
    'MARTIAL ARTS UNIFORM': '🥋',
    'CURLING STONE': '🥌',
    'LACROSSE STICK AND BALL': '🥍',
    'SOFTBALL': '🥎',
    'FLYING DISC': '🥏',
    'CROISSANT': '🥐',
    'AVOCADO': '🥑',
    'CUCUMBER': '🥒',
    'BACON': '🥓',
    'POTATO': '🥔',
    'CARROT': '🥕',
    'BAGUETTE BREAD': '🥖',
    'GREEN SALAD': '🥗',
    'SHALLOW PAN OF FOOD': '🥘',
    'STUFFED FLATBREAD': '🥙',
    'EGG': '🥚',
    'GLASS OF MILK': '🥛',
    'PEANUTS': '🥜',
    'KIWIFRUIT': '🥝',
    'PANCAKES': '🥞',
    'DUMPLING': '🥟',
    'FORTUNE COOKIE': '🥠',
    'TAKEOUT BOX': '🥡',
    'CHOPSTICKS': '🥢',
    'BOWL WITH SPOON': '🥣',
    'CUP WITH STRAW': '🥤',
    'COCONUT': '🥥',
    'BROCCOLI': '🥦',
    'PIE': '🥧',
    'PRETZEL': '🥨',
    'CUT OF MEAT': '🥩',
    'SANDWICH': '🥪',
    'CANNED FOOD': '🥫',
    'LEAFY GREEN': '🥬',
    'MANGO': '🥭',
    'MOON CAKE': '🥮',
    'BAGEL': '🥯',
    'SMILING FACE WITH SMILING EYES AND THREE HEARTS': '🥰',
    'YAWNING FACE': '🥱',
    'SMILING FACE WITH TEAR': '🥲',
    'FACE WITH PARTY HORN AND PARTY HAT': '🥳',
    'FACE WITH UNEVEN EYES AND WAVY MOUTH': '🥴',
    'OVERHEATED FACE': '🥵',
    'FREEZING FACE': '🥶',
    // 'NINJA': '🥷',
    // 'DISGUISED FACE': '🥸',
    // 'FACE HOLDING BACK TEARS': '🥹',
    'FACE WITH PLEADING EYES': '🥺',
    'SARI': '🥻',
    'LAB COAT': '🥼',
    'GOGGLES': '🥽',
    'HIKING BOOT': '🥾',
    'FLAT SHOE': '🥿',
    'CRAB': '🦀',
    'LION FACE': '🦁',
    'SCORPION': '🦂',
    'TURKEY': '🦃',
    'UNICORN FACE': '🦄',
    'EAGLE': '🦅',
    'DUCK': '🦆',
    'BAT': '🦇',
    'SHARK': '🦈',
    'OWL': '🦉',
    'FOX FACE': '🦊',
    'BUTTERFLY': '🦋',
    'DEER': '🦌',
    'GORILLA': '🦍',
    'LIZARD': '🦎',
    'RHINOCEROS': '🦏',
    'SHRIMP': '🦐',
    'SQUID': '🦑',
    'GIRAFFE FACE': '🦒',
    'ZEBRA FACE': '🦓',
    'HEDGEHOG': '🦔',
    'SAUROPOD': '🦕',
    'T-REX': '🦖',
    'CRICKET': '🦗',
    'KANGAROO': '🦘',
    'LLAMA': '🦙',
    'PEACOCK': '🦚',
    'HIPPOPOTAMUS': '🦛',
    'PARROT': '🦜',
    'RACCOON': '🦝',
    'LOBSTER': '🦞',
    'MOSQUITO': '🦟',
    'MICROBE': '🦠',
    'BADGER': '🦡',
    'SWAN': '🦢',
    // 'MAMMOTH': '🦣',
    // 'DODO': '🦤',
    'SLOTH': '🦥',
    'OTTER': '🦦',
    'ORANGUTAN': '🦧',
    'SKUNK': '🦨',
    'FLAMINGO': '🦩',
    'OYSTER': '🦪',
    // 'BEAVER': '🦫',
    // 'BISON': '🦬',
    // 'SEAL': '🦭',
    'GUIDE DOG': '🦮',
    'PROBING CANE': '🦯',
    'EMOJI COMPONENT RED HAIR': '🦰',
    'EMOJI COMPONENT CURLY HAIR': '🦱',
    'EMOJI COMPONENT BALD': '🦲',
    'EMOJI COMPONENT WHITE HAIR': '🦳',
    'BONE': '🦴',
    'LEG': '🦵',
    'FOOT': '🦶',
    'TOOTH': '🦷',
    'SUPERHERO': '🦸',
    'SUPERVILLAIN': '🦹',
    'SAFETY VEST': '🦺',
    'EAR WITH HEARING AID': '🦻',
    'MOTORIZED WHEELCHAIR': '🦼',
    'MANUAL WHEELCHAIR': '🦽',
    'MECHANICAL ARM': '🦾',
    'MECHANICAL LEG': '🦿',
    'CHEESE WEDGE': '🧀',
    'CUPCAKE': '🧁',
    'SALT SHAKER': '🧂',
    'BEVERAGE BOX': '🧃',
    'GARLIC': '🧄',
    'ONION': '🧅',
    'FALAFEL': '🧆',
    'WAFFLE': '🧇',
    'BUTTER': '🧈',
    'MATE DRINK': '🧉',
    'ICE CUBE': '🧊',
    'BUBBLE TEA': '🧋',
    'TROLL': '🧌',
    'STANDING PERSON': '🧍',
    'KNEELING PERSON': '🧎',
    'DEAF PERSON': '🧏',
    'FACE WITH MONOCLE': '🧐',
    'ADULT': '🧑',
    'CHILD': '🧒',
    'OLDER ADULT': '🧓',
    'BEARDED PERSON': '🧔',
    'PERSON WITH HEADSCARF': '🧕',
    'PERSON IN STEAMY ROOM': '🧖',
    'PERSON CLIMBING': '🧗',
    'PERSON IN LOTUS POSITION': '🧘',
    'MAGE': '🧙',
    'FAIRY': '🧚',
    'VAMPIRE': '🧛',
    'MERPERSON': '🧜',
    'ELF': '🧝',
    'GENIE': '🧞',
    'ZOMBIE': '🧟',
    'BRAIN': '🧠',
    'ORANGE HEART': '🧡',
    'BILLED CAP': '🧢',
    'SCARF': '🧣',
    'GLOVES': '🧤',
    'COAT': '🧥',
    'SOCKS': '🧦',
    'RED GIFT ENVELOPE': '🧧',
    'FIRECRACKER': '🧨',
    'JIGSAW PUZZLE PIECE': '🧩',
    'TEST TUBE': '🧪',
    'PETRI DISH': '🧫',
    'DNA DOUBLE HELIX': '🧬',
    'COMPASS': '🧭',
    'ABACUS': '🧮',
    'FIRE EXTINGUISHER': '🧯',
    'TOOLBOX': '🧰',
    'BRICK': '🧱',
    'MAGNET': '🧲',
    'LUGGAGE': '🧳',
    'LOTION BOTTLE': '🧴',
    'SPOOL OF THREAD': '🧵',
    'BALL OF YARN': '🧶',
    'SAFETY PIN': '🧷',
    'TEDDY BEAR': '🧸',
    'BROOM': '🧹',
    'BASKET': '🧺',
    'ROLL OF PAPER': '🧻',
    'BAR OF SOAP': '🧼',
    'SPONGE': '🧽',
    'RECEIPT': '🧾',
    'NAZAR AMULET': '🧿',
    'BALLET SHOES': '🩰',
    'ONE-PIECE SWIMSUIT': '🩱',
    'BRIEFS': '🩲',
    'SHORTS': '🩳',
    // 'THONG SANDAL': '🩴',
    // 'LIGHT BLUE HEART': '🩵',
    // 'GREY HEART': '🩶',
    // 'PINK HEART': '🩷',
    'DROP OF BLOOD': '🩸',
    'ADHESIVE BANDAGE': '🩹',
    'STETHOSCOPE': '🩺',
    // 'X-RAY': '🩻',
    // 'CRUTCH': '🩼',
    'YO-YO': '🪀',
    'KITE': '🪁',
    'PARACHUTE': '🪂',
    // 'BOOMERANG': '🪃',
    // 'MAGIC WAND': '🪄',
    // 'PINATA': '🪅',
    // 'NESTING DOLLS': '🪆',
    // 'MARACAS': '🪇',
    // 'FLUTE': '🪈',
    'RINGED PLANET': '🪐',
    'CHAIR': '🪑',
    'RAZOR': '🪒',
    'AXE': '🪓',
    'DIYA LAMP': '🪔',
    'BANJO': '🪕',
    // 'MILITARY HELMET': '🪖',
    // 'ACCORDION': '🪗',
    // 'LONG DRUM': '🪘',
    // 'COIN': '🪙',
    // 'CARPENTRY SAW': '🪚',
    // 'SCREWDRIVER': '🪛',
    // 'LADDER': '🪜',
    // 'HOOK': '🪝',
    // 'MIRROR': '🪞',
    // 'WINDOW': '🪟',
    // 'PLUNGER': '🪠',
    // 'SEWING NEEDLE': '🪡',
    // 'KNOT': '🪢',
    // 'BUCKET': '🪣',
    // 'MOUSE TRAP': '🪤',
    // 'TOOTHBRUSH': '🪥',
    // 'HEADSTONE': '🪦',
    // 'PLACARD': '🪧',
    // 'ROCK': '🪨',
    // 'MIRROR BALL': '🪩',
    // 'IDENTIFICATION CARD': '🪪',
    // 'LOW BATTERY': '🪫',
    // 'HAMSA': '🪬',
    // 'FOLDING HAND FAN': '🪭',
    // 'HAIR PICK': '🪮',
    // 'KHANDA': '🪯',
    // 'FLY': '🪰',
    // 'WORM': '🪱',
    // 'BEETLE': '🪲',
    // 'COCKROACH': '🪳',
    // 'POTTED PLANT': '🪴',
    // 'WOOD': '🪵',
    // 'FEATHER': '🪶',
    // 'LOTUS': '🪷',
    // 'CORAL': '🪸',
    // 'EMPTY NEST': '🪹',
    // 'NEST WITH EGGS': '🪺',
    // 'HYACINTH': '🪻',
    // 'JELLYFISH': '🪼',
    // 'WING': '🪽',
    // 'GOOSE': '🪿',
    // 'ANATOMICAL HEART': '🫀',
    // 'LUNGS': '🫁',
    // 'PEOPLE HUGGING': '🫂',
    // 'PREGNANT MAN': '🫃',
    // 'PREGNANT PERSON': '🫄',
    // 'PERSON WITH CROWN': '🫅',
    // 'MOOSE': '🫎',
    // 'DONKEY': '🫏',
    // 'BLUEBERRIES': '🫐',
    // 'BELL PEPPER': '🫑',
    // 'OLIVE': '🫒',
    // 'FLATBREAD': '🫓',
    // 'TAMALE': '🫔',
    // 'FONDUE': '🫕',
    // 'TEAPOT': '🫖',
    // 'POURING LIQUID': '🫗',
    // 'BEANS': '🫘',
    // 'JAR': '🫙',
    // 'GINGER ROOT': '🫚',
    // 'PEA POD': '🫛',
    // 'MELTING FACE': '🫠',
    // 'SALUTING FACE': '🫡',
    // 'FACE WITH OPEN EYES AND HAND OVER MOUTH': '🫢',
    // 'FACE WITH PEEKING EYE': '🫣',
    // 'FACE WITH DIAGONAL MOUTH': '🫤',
    // 'DOTTED LINE FACE': '🫥',
    // 'BITING LIP': '🫦',
    // 'BUBBLES': '🫧',
    // 'SHAKING FACE': '🫨',
    // 'HAND WITH INDEX FINGER AND THUMB CROSSED': '🫰',
    // 'RIGHTWARDS HAND': '🫱',
    // 'LEFTWARDS HAND': '🫲',
    // 'PALM DOWN HAND': '🫳',
    // 'PALM UP HAND': '🫴',
    // 'INDEX POINTING AT THE VIEWER': '🫵',
    // 'HEART HANDS': '🫶',
    // 'LEFTWARDS PUSHING HAND': '🫷',
    // 'RIGHTWARDS PUSHING HAND': '🫸',
}
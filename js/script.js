const prefixes = [
    { word: 'Gis', meaning: 'light' },
    { word: 'Qiwol', meaning: 'strength' },
    { word: 'Bilu', meaning: 'nature' },
    { word: 'Zuqe', meaning: 'wisdom' },
    { word: 'Berile', meaning: 'serenity' },
    { word: 'Hituwa', meaning: 'harmony' },
    { word: 'Zozafu', meaning: 'mystery' },
    { word: 'Kul', meaning: 'shadow' },
    { word: 'Xasa', meaning: 'wind' },
    { word: 'Josa', meaning: 'energy' },
    { word: 'Lot', meaning: 'earth' },
    { word: 'Zed', meaning: 'power' },
    { word: 'Wokoca', meaning: 'guardian' },
    { word: 'Qosi', meaning: 'dream' },
    { word: 'Zizice', meaning: 'purity' },
    { word: 'Kaqe', meaning: 'spirit' },
    { word: 'Xosima', meaning: 'dawn' },
    { word: 'Dan', meaning: 'warrior' },
    { word: 'Jiqo', meaning: 'peace' },
    { word: 'Luwu', meaning: 'moon' },
    { word: 'Zanowo', meaning: 'adventure' },
    { word: 'Gusol', meaning: 'forest' },
    { word: 'Seh', meaning: 'flame' },
    { word: 'Baki', meaning: 'strength' },
    { word: 'Roki', meaning: 'stone' },
    { word: 'Jeyure', meaning: 'tranquility' },
    { word: 'Tet', meaning: 'star' },
    { word: 'Cufuge', meaning: 'path' },
    { word: 'Naku', meaning: 'fire' },
    { word: 'Gag', meaning: 'thunder' },
    { word: 'Hub', meaning: 'life' },
    { word: 'Nijay', meaning: 'sky' },
    { word: 'Hamuxo', meaning: 'ocean' },
    { word: 'Qofol', meaning: 'ice' },
    { word: 'Naluz', meaning: 'storm' },
    { word: 'Sicira', meaning: 'lightbringer' },
    { word: 'Vetak', meaning: 'chaos' },
    { word: 'Bob', meaning: 'energy' },
    { word: 'Quta', meaning: 'unity' },
    { word: 'Kivaqo', meaning: 'shield' },
    { word: 'Goqih', meaning: 'truth' },
    { word: 'Camek', meaning: 'river' },
    { word: 'Fami', meaning: 'strength' },
    { word: 'Liziwo', meaning: 'freedom' },
    { word: 'Yew', meaning: 'wind' },
    { word: 'Ter', meaning: 'time' },
    { word: 'San', meaning: 'hope' },
    { word: 'Yagedi', meaning: 'victory' },
    { word: 'Qug', meaning: 'courage' },
    { word: 'Lop', meaning: 'journey' },
    { word: 'Xafas', meaning: 'flame' },
    { word: 'Vico', meaning: 'spirit' },
    { word: 'Zagad', meaning: 'protector' },
    { word: 'Bad', meaning: 'might' },
    { word: 'Ciyug', meaning: 'wisdom' },
    { word: 'Miqilu', meaning: 'peacekeeper' },
    { word: 'Cobe', meaning: 'guardian' },
    { word: 'Basaw', meaning: 'horizon' },
    { word: 'Qiku', meaning: 'heart' },
    { word: 'Zer', meaning: 'force' },
    { word: 'Ximik', meaning: 'thunder' },
    { word: 'Diw', meaning: 'power' },
    { word: 'Recina', meaning: 'guide' },
    { word: 'Biq', meaning: 'spark' },
    { word: 'Qiy', meaning: 'silence' },
    { word: 'Beboj', meaning: 'seeker' },
    { word: 'Xanul', meaning: 'night' },
    { word: 'Sit', meaning: 'vision' },
    { word: 'Gafic', meaning: 'stone' },
    { word: 'Yica', meaning: 'freedom' },
    { word: 'Keju', meaning: 'shield' },
    { word: 'Xogus', meaning: 'light' },
    { word: 'Qure', meaning: 'star' },
    { word: 'Zova', meaning: 'journey' },
    { word: 'Sewoj', meaning: 'silence' },
    { word: 'Xagita', meaning: 'hope' },
    { word: 'Yowaye', meaning: 'protector' },
    { word: 'Sumupe', meaning: 'shield' },
    { word: 'Jaci', meaning: 'knowledge' },
    { word: 'Cemu', meaning: 'wisdom' },
    { word: 'Sone', meaning: 'pathfinder' },
    { word: 'Xago', meaning: 'timekeeper' },
    { word: 'Cumo', meaning: 'traveler' },
    { word: 'Kat', meaning: 'honor' },
    { word: 'Kixe', meaning: 'grace' },
    { word: 'Heg', meaning: 'fire' },
    { word: 'Kesixu', meaning: 'shadow' },
    { word: 'Ruc', meaning: 'stone' },
    { word: 'Neke', meaning: 'traveler' },
    { word: 'Cid', meaning: 'guide' },
    { word: 'Lerike', meaning: 'starcatcher' },
    { word: 'Biben', meaning: 'lightbearer' },
    { word: 'Los', meaning: 'seeker' },
    { word: 'Jaha', meaning: 'light' },
    { word: 'Daji', meaning: 'flame' },
    { word: 'Luwe', meaning: 'shield' },
    { word: 'Nato', meaning: 'truth' },
    { word: 'Siham', meaning: 'spirit' },
    { word: 'Roqih', meaning: 'mountain' }
]
;

const suffixes =[
    { word: 'Toyini', meaning: 'guardianship' },
    { word: 'Hitixo', meaning: 'protector' },
    { word: 'Neto', meaning: 'force' },
    { word: 'Mupe', meaning: 'wisdom' },
    { word: 'Doko', meaning: 'storm' },
    { word: 'Nav', meaning: 'freedom' },
    { word: 'Lisu', meaning: 'vision' },
    { word: 'Cak', meaning: 'fire' },
    { word: 'Sav', meaning: 'heart' },
    { word: 'Viluco', meaning: 'courage' },
    { word: 'Ponoqo', meaning: 'seeker' },
    { word: 'Siwo', meaning: 'path' },
    { word: 'Nogiti', meaning: 'light' },
    { word: 'Recig', meaning: 'flame' },
    { word: 'Popizo', meaning: 'guide' },
    { word: 'Fuf', meaning: 'spark' },
    { word: 'Kujo', meaning: 'sky' },
    { word: 'Zagi', meaning: 'strength' },
    { word: 'Lixebi', meaning: 'journey' },
    { word: 'Lenabe', meaning: 'grace' },
    { word: 'Vimoy', meaning: 'truth' },
    { word: 'Qiz', meaning: 'light' },
    { word: 'Yidey', meaning: 'wisdom' },
    { word: 'Habawa', meaning: 'protector' },
    { word: 'Hadeja', meaning: 'flame' },
    { word: 'Heyi', meaning: 'shield' },
    { word: 'But', meaning: 'storm' },
    { word: 'Xanuho', meaning: 'energy' },
    { word: 'Cabode', meaning: 'strength' },
    { word: 'Jevuj', meaning: 'vision' },
    { word: 'Dexu', meaning: 'wind' },
    { word: 'Zaf', meaning: 'light' },
    { word: 'Cun', meaning: 'courage' },
    { word: 'Levoyu', meaning: 'force' },
    { word: 'Mareze', meaning: 'honor' },
    { word: 'Biy', meaning: 'seeker' },
    { word: 'Tajura', meaning: 'warrior' },
    { word: 'Cex', meaning: 'flame' },
    { word: 'Nadob', meaning: 'protector' },
    { word: 'Tewowo', meaning: 'guide' },
    { word: 'Hepovu', meaning: 'vision' },
    { word: 'Niw', meaning: 'strength' },
    { word: 'Wotur', meaning: 'journey' },
    { word: 'Sexugi', meaning: 'shield' },
    { word: 'Jata', meaning: 'spirit' },
    { word: 'Daki', meaning: 'storm' },
    { word: 'Nodote', meaning: 'flame' },
    { word: 'Dobuji', meaning: 'light' },
    { word: 'Refem', meaning: 'peace' },
    { word: 'Zaco', meaning: 'energy' },
    { word: 'Sen', meaning: 'force' },
    { word: 'Rociqa', meaning: 'sky' },
    { word: 'Yay', meaning: 'freedom' },
    { word: 'Ribu', meaning: 'truth' },
    { word: 'Kawuf', meaning: 'stone' },
    { word: 'Rotit', meaning: 'spirit' },
    { word: 'Conijo', meaning: 'seeker' },
    { word: 'Fuqevu', meaning: 'star' },
    { word: 'Qepad', meaning: 'storm' },
    { word: 'Ger', meaning: 'heart' },
    { word: 'Lubija', meaning: 'vision' },
    { word: 'Netu', meaning: 'light' },
    { word: 'Tixew', meaning: 'force' },
    { word: 'Sejuj', meaning: 'flame' },
    { word: 'Cukavu', meaning: 'guardian' },
    { word: 'Hoje', meaning: 'peace' },
    { word: 'Gixaf', meaning: 'star' },
    { word: 'Qive', meaning: 'seeker' },
    { word: 'Gici', meaning: 'journey' },
    { word: 'Wuta', meaning: 'path' },
    { word: 'Vusute', meaning: 'sky' },
    { word: 'Kiwihu', meaning: 'flame' },
    { word: 'Beq', meaning: 'strength' },
    { word: 'Wami', meaning: 'truth' },
    { word: 'Diq', meaning: 'energy' },
    { word: 'Xori', meaning: 'shield' },
    { word: 'Xeqoxi', meaning: 'wisdom' },
    { word: 'Toxoma', meaning: 'journey' },
    { word: 'Bube', meaning: 'seeker' },
    { word: 'Hoh', meaning: 'flame' },
    { word: 'Sehuru', meaning: 'courage' },
    { word: 'Deno', meaning: 'protector' },
    { word: 'Qan', meaning: 'light' },
    { word: 'Kac', meaning: 'wind' },
    { word: 'Gilufu', meaning: 'strength' },
    { word: 'Pagesa', meaning: 'grace' },
    { word: 'Luha', meaning: 'shield' },
    { word: 'Yix', meaning: 'seeker' },
    { word: 'Yezof', meaning: 'spirit' },
    { word: 'Yadu', meaning: 'guardian' },
    { word: 'Sarihi', meaning: 'flame' },
    { word: 'Gav', meaning: 'light' },
    { word: 'Heza', meaning: 'path' },
    { word: 'Qizi', meaning: 'energy' },
    { word: 'Tuzol', meaning: 'wind' },
    { word: 'Fame', meaning: 'force' },
    { word: 'Nef', meaning: 'courage' },
    { word: 'Qidi', meaning: 'star' },
    { word: 'Pim', meaning: 'truth' },
    { word: 'Tikeyo', meaning: 'vision' }
]
;

document.getElementById('generateBtn').addEventListener('click', () => {
    const quantity = parseInt(document.getElementById('quantity').value);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    // Used to track generated combinations to prevent duplicates
    const generatedCombinations = new Set();

    for (let i = 0; i < quantity; i++) {
        let prefix, suffix, generatedName;

        // Keep generating until a unique combination is found
        do {
            prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
            suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
            generatedName = `${prefix.word}${suffix.word}`;
        } while (generatedCombinations.has(generatedName));

        // Add the unique name to the set
        generatedCombinations.add(generatedName);

        // Constructing the word and meaning combination
        const meaning = `Meaning: ${prefix.meaning} & ${suffix.meaning}`;

        // Displaying the result
        const nameEntry = document.createElement('div');
        nameEntry.classList.add('name-entry');
        nameEntry.textContent = `${generatedName} ---- ${meaning}`;

        resultDiv.appendChild(nameEntry);
    }
});




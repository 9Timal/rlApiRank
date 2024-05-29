async function getPlayerData() {
    const playerId = document.getElementById('playerId').value;
    const response = await fetch(`http://localhost:5000/api/player/${playerId}`);
    const data = await response.json();

    document.getElementById('playerName').textContent = data.name;
    document.getElementById('platformLogo').firstElementChild.src = getPlatformLogo(data.platform);

    document.getElementById('rank1v1Logo').firstElementChild.src = getRankImage(data.ranks['1v1']);
    document.getElementById('rank2v2Logo').firstElementChild.src = getRankImage(data.ranks['2v2']);
    document.getElementById('rank3v3Logo').firstElementChild.src = getRankImage(data.ranks['3v3']);
}

function getPlatformLogo(platform) {
    switch (platform) {
        case 'playstation':
            return './logoImg/logo_play.png';
        case 'xbox':
            return './logoImg/logo_xbox.png';
        case 'pc':
            return './logoImg/logo_pc.png';
        default:
            return './logoImg/logo_unknown.png';
    }
}

function getRankImage(rank) {
    switch (rank) {
        case 'bronze':
            return './rankImg/bronze/bronze.webp';
        case 'silver':
            return './rankImg/silver/silver.webp';
        case 'gold':
            return './rankImg/gold/gold.webp';
        case 'platinum':
            return './rankImg/platinum/platinum.webp';
        case 'diamond':
            return './rankImg/diamond/diamond.webp';
        case 'champion':
            return './rankImg/champion/champion.webp';
        case 'grand_champion':
            return './rankImg/grand_champion/grand_champion.webp';
        case 'supersonic_legend':
            return './rankImg/supersonic_legend/supersonic_legend.webp';
        default:
            return './rankImg/unranked/unranked.webp';
    }

    
}

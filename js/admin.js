<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Адмін-панель</title>

<style>
body{
    margin:0;
    background:#121212;
    color:white;
    font-family:Arial,sans-serif;
}

header{
    background:#1f1f1f;
    padding:20px;
    text-align:center;
    font-size:28px;
    font-weight:bold;
}

.container{
    max-width:1000px;
    margin:40px auto;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:20px;
}

.card{
    background:#1f1f1f;
    border-radius:12px;
    padding:25px;
    text-align:center;
    cursor:pointer;
    transition:.2s;
}

.card:hover{
    transform:scale(1.03);
    background:#2a2a2a;
}

h2{
    margin-top:10px;
}
</style>

</head>

<body>

<header>
⚙️ Панель адміністратора
</header>

<div class="container">

<div class="card">
<h2>🃏 Картки</h2>
<p>Додавання та редагування карток</p>
</div>

<div class="card">
<h2>📦 Пакунки</h2>
<p>Створення наборів карток</p>
</div>

<div class="card">
<h2>👥 Користувачі</h2>
<p>Перегляд акаунтів</p>
</div>

<div class="card">
<h2>📖 Комікси</h2>
<p>Керування випусками</p>
</div>

<div class="card">
<h2>📷 QR-коди</h2>
<p>Створення кодів</p>
</div>

<div class="card">
<h2>📊 Статистика</h2>
<p>Перегляд активності</p>
</div>

</div>

</body>
</html>

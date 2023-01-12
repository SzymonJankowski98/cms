
<script lang="ts">

    /** @type {import('./$types').PageData} */
    export let data : any;    

</script>

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
    <title>Admin Page</title>
</head>

<style>

    nav{
        background-color: gray;
        display: flex;
        padding: 10px;
        font-family: 'Montserrat', sans-serif;
        color: white;

    }

    .nav-panel{
        width: 50%;
    }

    .nav-user{
        width: 50%;
        text-align: right;
        margin-right: 10px;;
    }

    .page{
        width: 100%;
        color: white;
        background-color: darkgray;
        border-top: 2px;
        border-color: white;
        border-style: solid;
        text-align: center;

        display: flex;
        align-items: center;
        justify-content: center;

    }

    .page-name{
        width: 60%;
        text-align: center;
        float: right;
    }

    .buttons{
        width: 40%;
        margin: 10px;
    }
    form > input{
        color: black;
        background-color: whitesmoke;
        float: left;
        margin-right: 10px;
        border-radius: 7px;
        padding: 5px;
    }
</style>

<div>
    <nav>
        <div class="nav-panel">This is admin panel</div>
        <div class="nav-user">Signed in as {data.username}</div>
        <form action="/signin">   
            <input type="submit" value="log out">
        </form>
    </nav>

    <div class="page">
        <form action="/api/newPage" method="POST">
            <input type="text" name="name" />    
            <input type="submit" value="Create New Page">
        </form>
    </div>

    {#each data.userPages as page}
        <div class="page">
            <h1 class="page-name">{page}</h1>
            <div class="buttons">
                <form action="/page/{page}">   
                    <input type="submit" value="Edit Page">
                </form>
                <form action="/page/{page}">
                    <input type="hidden" name="release" value="true" />    
                    <input type="submit" value="Release Mode">
                </form>
            </div>
        </div>

    {/each}    

</div>


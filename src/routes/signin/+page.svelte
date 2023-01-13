<script>
  import "../../global.css";
</script>

<div class="w-full h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
  <form class="form-control p-10 card bg-base-200 min-w-[400px]" method="POST">
    <h1 class="pb-5 font-mono text-2xl text-center font-bold">Sign in</h1>
    <div>
      <label class="label" for="username">
        <span class="label-text">Username</span>
      </label> 
      <input name="username" type="text" placeholder="username" class="input w-full">
    </div>
    <div>
      <label class="label" for="password">
        <span class="label-text">Password</span>
      </label> 
      <input name="password" type="password" placeholder="password" class="input w-full">
    </div>
    <button class="mt-6 btn btn-primary">Log in</button>
  </form>
</div>


<template>
    <div class="task-list-item">
            <h5 class="task-title">{{ task.title }}</h5>
            <!-- <div class="task-content"> -->
                <p class="task-description" >{{ task.description }}</p>

                <p class="task-status">{{ task.status }}</p>
                <button ><h5>X</h5></button>
            <!-- </div> -->
    </div>
</template>

<script>
export default {
  props: {
      task: Object,
  }
}
</script>
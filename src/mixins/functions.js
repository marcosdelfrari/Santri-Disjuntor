export const myFunctions = {
  data() {
    return {
      isMenuOpen: false,
      showDescription: false,
      showForm: false,
      comment: {
        name: "",
        message: "",
        image: "",
      },
      comments: [],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    selectLink(linkNumber) {
      this.selectedLink = linkNumber;
      this.isMenuOpen = false;
    },
    toggleDescription() {
      this.showDescription = !this.showDescription;
    },
    expandForm() {
      this.showForm = !this.showForm;
    },
    submitComment() {
      this.comments.push({ ...this.comment });
      this.comment.name = "";
      this.comment.message = "";
      this.comment.image = "";
      localStorage.setItem("comments", JSON.stringify(this.comments));
      const inputImage = document.querySelector("#input-image");
      if (inputImage) {
        inputImage.value = "";
      }
    },
    created() {
      const storedComments = localStorage.getItem("comments");
      if (storedComments) {
        this.comments = JSON.parse(storedComments);
      }
    },
  },
};

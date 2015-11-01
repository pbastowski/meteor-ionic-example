Projects = new Mongo.Collection("Projects");
Tasks = new Mongo.Collection("Tasks");

Meteor.publish('Projects', function () {
    return Projects.find({});
});

Meteor.publish('Tasks', function () {
    return Tasks.find({});
});

Projects.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

Tasks.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

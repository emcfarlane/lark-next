load("proto.star", "proto")

apipb = proto.file("apipb/api.proto")
svc = mux.services("api.Tutorials")

def test_crud(assert):
    tutorial = svc.CreateTutorial(tutorial = apipb.Tutorial(
        title = "Hello",
        sub_title = "World",
        url = "",
    ))
    assert.eq(tutorial.title, "Hello")
    assert.eq(tutorial.sub_title, "World")
    assert.neq(tutorial.name, "")  # Check name was given.

    get_tutorial = svc.GetTutorial(name = tutorial.name)
    assert.eq(tutorial, get_tutorial)

    tutorial.title = "Hello, world!"
    tutorial.sub_title = "A test to check field mask."
    update_tutorial = svc.UpdateTutorial(
        tutorial = tutorial,
        update_mask = ["title"],  # Only update mask fields should be updated.
    )
    assert.eq(update_tutorial.name, tutorial.name)
    assert.eq(update_tutorial.title, "Hello, world!")
    assert.eq(update_tutorial.sub_title, "World")

    svc.DeleteTutorial(name = tutorial.name)
    assert.fails(lambda: svc.GetTutorial(name = tutorial.name), "not found")

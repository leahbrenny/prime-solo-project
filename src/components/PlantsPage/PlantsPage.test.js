test(`should fail if string as the plant_id`, async() => {
    let putResponse = await agent
      .put(`/api/plant/${plant.id}`)
      .send({
        plant_id: 'testing'
      });

    expect(putResponse.statusCode).toBe(500);
  });
exports.createPages = async ({ actions, graphql, reporter}) => {
    const resultado = await graphql(`
        query {
            allDatoCmsHabitacion {
                nodes {
                slug
                }
            }
        }
    `);

    if(resultado.errors){
        reporter.panic('There were no results', resultado.errors)
    }

    //Si hay paginas
    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;
    habitaciones.forEach(habitacion => {
        actions.createPage({
            path: habitacion.slug,
            component: require.resolve('./src/components/habitaciones.js'),
            context: {
                slug: habitacion.slug
            }
        })
    });

}
package ai.timefold.solver.examples.oled.domain.solver;

import ai.timefold.solver.core.impl.heuristic.selector.common.decorator.SelectionSorterWeightFactory;
import ai.timefold.solver.examples.oled.domain.OledSchedule;
import ai.timefold.solver.examples.oled.domain.ProductionJob;

import java.util.Comparator;

import static java.util.Comparator.comparing;
import static java.util.Comparator.comparingInt;

public class ProductionJobDifficultyWeightFactory implements SelectionSorterWeightFactory<OledSchedule, ProductionJob> {
    @Override
    public ProductionDifficultyWeight createSorterWeight(OledSchedule schedule, ProductionJob productionJob) {
        return new ProductionDifficultyWeight(productionJob);

    }

    public static class ProductionDifficultyWeight implements Comparable<ProductionDifficultyWeight> {
        // FIXME SortedWeight criteria:
        //  https://timefold.ai/docs/timefold-solver/latest/configuration/configuration.html#planningEntityDifficulty
        //  Difficulty should be implemented ascending: easy entities are lower, difficult entities are higher.
        //  For example, in bin packing: small item < medium item < big item.
        //  3.3.2. Planning entity difficulty
        //  Do not try to use planning entity difficulty to implement a business constraint.
        //  It will not affect the score function: if we have infinite solving time, the returned solution will be the same.
        //  To attain a schedule in which certain entities are scheduled earlier in the schedule,
        //  add a score constraint to change the score function so it prefers such solutions.
        //  Only consider adding planning entity difficulty too if it can make the solver more efficient.
        //  1. Earlier order due date -> score constraint
        //  2. Larger order quantity
        //  3. Large production quantity -> production progress -> score constraint
        //                               -> but can use weight for normal chunk vs remainder
        //  4. productionJob.id
        private static final Comparator<ProductionDifficultyWeight> COMPARATOR = comparingInt(
                // Descending higher weight to a smaller order quantity!
                //(ProductionDifficultyWeight weight) -> -weight.productionJob.getOrder().getQuantity())
                // Ascending higher weight to a smaller order quantity!
                (ProductionDifficultyWeight weight) -> weight.productionJob.getOrder().getQuantity())
                // Descending higher weight to a larger production quantity!
                //.thenComparingInt(weight -> -weight.productionJob.getQuantity())
                // Ascending higher weight to a larger production quantity!
                .thenComparingInt(weight -> weight.productionJob.getQuantity())
                .thenComparing(weight -> weight.productionJob, comparing(ProductionJob::getId));
        private final ProductionJob productionJob;
        public ProductionDifficultyWeight(ProductionJob productionJob) {
            this.productionJob = productionJob;
        }
        @Override
        public int compareTo(ProductionDifficultyWeight other) { return COMPARATOR.compare(this, other); }
    }

}
